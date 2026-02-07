import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequest = {
  messages?: ChatMessage[];
  context?: {
    title?: string;
    content?: string;
    language?: string;
  };
};

const FALLBACK_MODELS = [
  "models/gemini-2.5-flash",
  "models/gemini-2.5-pro",
  "models/gemini-2.0-flash-001",
  "models/gemini-2.0-flash",
  "models/gemini-2.0-flash-lite-001",
  "models/gemini-2.0-flash-lite",
  "models/gemini-2.0-flash-lite-preview-02-05",
  "models/gemini-2.0-flash-lite-preview",
  "models/gemini-2.0-flash-exp",
  "models/gemini-exp-1206",
  "models/gemini-2.5-flash-preview-tts",
  "models/gemini-2.5-pro-preview-tts",
  "models/gemma-3-1b-it",
  "models/gemma-3-4b-it",
  "models/gemma-3-12b-it",
  "models/gemma-3-27b-it",
  "models/gemma-3n-e4b-it",
];

function buildSystemInstruction(context?: ChatRequest["context"]) {
  const title = context?.title?.trim();
  const content = context?.content?.trim();
  const language = context?.language === "fa" ? "Persian" : "English";

  const blocks: string[] = [
    `You are an AI tutor specialized in explaining algorithms.`,
    `Always answer in ${language}.`,
    `Use ONLY the provided article content as your source of truth.`,
    `If the answer cannot be fully derived from the article, respond with "I am not sure based on the provided article."`,
    `Return a valid JSON object and NOTHING else.`,
    `Do not use markdown, code fences, or extra text.`,
    `The JSON MUST strictly follow this schema:`,
    `{"answer":"string","bullets":["string"]}`,
    `Rules for fields:`,
    `- "answer": a concise, direct explanation.`,
    `- "bullets": key points extracted verbatim or closely paraphrased from the article.`,
    `- If there are no bullet points, return an empty array [].`,
    `Ensure the output is valid JSON that can be parsed without errors.`,
  ];

  if (title) {
    blocks.push(`Article title: ${title}`);
  }

  if (content) {
    blocks.push(`Article content: ${content}`);
  }

  return blocks.join("\n");
}

function toGeminiContents(messages: ChatMessage[]) {
  return messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));
}

async function requestGemini({
  apiKey,
  model,
  messages,
  systemInstruction,
}: {
  apiKey: string;
  model: string;
  messages: ChatMessage[];
  systemInstruction: string;
}) {
  const modelPath = model.startsWith("models/") ? model : `models/${model}`;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/${modelPath}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          role: "system",
          parts: [{ text: systemInstruction }],
        },
        contents: toGeminiContents(messages),
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 512,
        },
      }),
    },
  );

  const text = await response.text();
  if (!response.ok) {
    return { ok: false, status: response.status, text };
  }

  return { ok: true, status: response.status, text };
}

function isQuotaError(status: number, body: string) {
  if (status === 429) return true;
  if (status === 403 && body.toLowerCase().includes("quota")) return true;
  if (body.includes("RESOURCE_EXHAUSTED")) return true;
  return false;
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY environment variable." },
      { status: 500 },
    );
  }

  let payload: ChatRequest;
  try {
    payload = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const messages = payload.messages ?? [];
  if (!messages.length) {
    return NextResponse.json(
      { error: "No messages provided." },
      { status: 400 },
    );
  }

  const systemInstruction = buildSystemInstruction(payload.context);

  let lastError = "Request failed.";
  for (const model of FALLBACK_MODELS) {
    const result = await requestGemini({
      apiKey,
      model,
      messages,
      systemInstruction,
    });

    if (result.ok) {
      const data = JSON.parse(result.text) as {
        candidates?: Array<{
          content?: { parts?: Array<{ text?: string }> };
        }>;
      };
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (!rawText) {
        lastError = "Empty response from AI.";
        continue;
      }

      let answer = "";
      let bullets: string[] = [];
      try {
        const parsed = JSON.parse(rawText) as {
          answer?: string;
          bullets?: string[];
        };
        answer = parsed.answer?.trim() ?? "";
        bullets = Array.isArray(parsed.bullets)
          ? parsed.bullets.filter(Boolean)
          : [];
      } catch {
        // Fallback: treat raw text as a plain answer if model skips JSON.
        answer = rawText;
      }

      if (!answer.trim()) {
        lastError = "Empty response from AI.";
        continue;
      }

      return NextResponse.json({ text: answer, bullets, model });
    }

    lastError = result.text || "Request failed.";
    if (isQuotaError(result.status, result.text)) {
      continue;
    }

    break;
  }

  return NextResponse.json({ error: lastError }, { status: 502 });
}
