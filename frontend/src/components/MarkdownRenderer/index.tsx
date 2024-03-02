import React from 'react';
import ReactMarkdown from 'react-markdown';

interface IMark {
  children: string | string[]; // Allow a single string or an array of strings
}

const MarkdownRenderer: React.FC<IMark> = ({ children }) => {
  // Convert children to an array if it's a single string
  const contentArray =
    typeof children === 'string' ? [children] : (children as string[]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{contentArray.join('\n')}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
