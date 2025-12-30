'use client';

import { useEffect, useMemo, useState } from 'react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type AiChatProps = {
  title: string;
  content: string;
  language: 'en' | 'fa';
};

export function AiChat({ title, content, language }: AiChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [structured, setStructured] = useState<Record<number, string[]> | null>(
    null
  );
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelUsed, setModelUsed] = useState<string | null>(null);

  const storageKey = useMemo(
    () => `ai-chat:${language}:${title}`,
    [language, title]
  );

  const contextSnippet = useMemo(() => {
    const trimmed = content.replace(/\s+/g, ' ').trim();
    return trimmed.slice(0, 8000);
  }, [content]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as {
          messages?: ChatMessage[];
          structured?: Record<number, string[]>;
        };
        if (parsed.messages?.length) {
          setMessages(parsed.messages);
          setStructured(parsed.structured ?? null);
          return;
        }
      }
    } catch {
      // Ignore storage errors and fall back to default.
    }

    setMessages([
      {
        role: 'assistant',
        content:
          language === 'fa'
            ? 'سلام! هر سوالي درباره اين الگوريتم داريد بپرسيد.'
            : 'Hi! Ask me anything about this algorithm.',
      },
    ]);
    setStructured(null);
  }, [language, storageKey, title]);

  useEffect(() => {
    if (!messages.length) return;
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ messages, structured })
      );
    } catch {
      // Ignore storage write errors.
    }
  }, [messages, structured, storageKey]);

  const sendMessage = async () => {
    const prompt = input.trim();
    if (!prompt || loading) return;

    setError(null);
    setModelUsed(null);
    setLoading(true);
    setInput('');

    const nextMessages = [...messages, { role: 'user', content: prompt }];
    setMessages(nextMessages);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages,
          context: {
            title,
            content: contextSnippet,
            language,
          },
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Request failed');
      }

      const data = (await response.json()) as {
        text?: string;
        bullets?: string[];
        model?: string;
      };
      if (!data.text) {
        throw new Error('Empty response from AI');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.text }]);
      if (data.bullets?.length) {
        setStructured((prev) => ({
          ...(prev ?? {}),
          [nextMessages.length]: data.bullets ?? [],
        }));
      }
      setModelUsed(data.model ?? null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-12 rounded-2xl border bg-muted/20 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-headline font-semibold">
            {language === 'fa' ? 'گفتگو درباره الگوريتم' : 'Talk About This Algorithm'}
          </h2>
          <p className="text-sm text-muted-foreground">
            {language === 'fa'
              ? 'پاسخ ها بر اساس متن همين مطلب ساخته مي شوند.'
              : 'Answers are grounded in this article.'}
          </p>
        </div>
        {modelUsed ? (
          <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
            {modelUsed}
          </span>
        ) : null}
      </div>

      <div className="mt-6 space-y-3">
        {messages.map((message, index) => {
          const bullets = structured?.[index] ?? [];
          return (
            <div
              key={`${message.role}-${index}`}
              className={`rounded-xl px-4 py-3 text-sm leading-relaxed ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              {bullets.length ? (
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {bullets.map((item, itemIndex) => (
                    <li key={`${index}-bullet-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>

      {error ? (
        <p className="mt-3 text-sm text-destructive">{error}</p>
      ) : null}

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={
            language === 'fa' ? 'سوال خود را بنويسيد...' : 'Type your question...'
          }
          className="flex-1 rounded-xl border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          onClick={sendMessage}
          disabled={loading || input.trim().length === 0}
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? language === 'fa'
              ? 'در حال پاسخ...'
              : 'Thinking...'
            : language === 'fa'
              ? 'ارسال'
              : 'Send'}
        </button>
      </div>
    </section>
  );
}
