'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import { Check, Clipboard } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
    language: string;
    value: string;
}

export function CodeBlock({ language, value }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(value);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
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
    </div>
  );
}
