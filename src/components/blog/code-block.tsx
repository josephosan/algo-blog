'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import { Check, Clipboard, Play, Loader } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  language: string;
  value: string;
}

// Dummy function to replace the missing AI function
const runCode = async (input: { code: string; language: string }): Promise<string> => {
  console.log(`Running ${input.language} code:`, input.code);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "AI code execution is currently disabled.";
};


export function CodeBlock({ language, value }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onCopy = () => {
    navigator.clipboard.writeText(value);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const onRun = async () => {
    setIsRunning(true);
    setOutput(null);
    setError(null);
    try {
      const result = await runCode({ code: value, language });
      setOutput(result);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="relative group my-4 rounded-lg bg-[#1e1e1e] font-code text-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <span className="text-xs text-gray-400">{language}</span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={onRun}
            disabled={isRunning}
            aria-label="Run code with AI"
          >
            {isRunning ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={onCopy}
            aria-label="Copy code"
          >
            {hasCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Clipboard className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          backgroundColor: 'transparent',
        }}
        codeTagProps={{
            className: 'font-code'
        }}
      >
        {value}
      </SyntaxHighlighter>
      {(output !== null || error) && (
        <div className="border-t border-gray-700 p-4">
          <h4 className="text-xs font-semibold text-gray-400 mb-2">AI Output:</h4>
          {output !== null && (
            <pre className="text-sm text-white whitespace-pre-wrap">{output}</pre>
          )}
          {error && (
            <pre className="text-sm text-red-400 whitespace-pre-wrap">{error}</pre>
          )}
        </div>
      )}
    </div>
  );
}
