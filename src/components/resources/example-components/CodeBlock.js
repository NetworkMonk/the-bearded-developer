"use client";

import React, { useState } from "react";
import { Highlight, themes, defaultProps } from "prism-react-renderer";

export default function CodeBlock({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-gray-700 text-white hover:bg-gray-600 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <Highlight
        {...defaultProps}
        code={code.trim()}
        language={language}
        theme={themes.shadesOfPurple}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 rounded-xl overflow-x-auto text-sm max-h-96`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
