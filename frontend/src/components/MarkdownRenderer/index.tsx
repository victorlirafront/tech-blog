import React from 'react';
import ReactMarkdown from 'react-markdown';

interface IMark {
  children: string | string[];
}

const MarkdownRenderer: React.FC<IMark> = ({ children }) => {
  const contentArray = typeof children === 'string' ? [children] : (children as string[]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{contentArray.join('\n')}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
