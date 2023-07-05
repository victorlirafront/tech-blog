import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IMark {
    markdown: string
}

const MarkdownRenderer = (props: IMark) => {

    return (
        <div className="markdown-container">
            <ReactMarkdown children={props.markdown} />
        </div>
    );
};

export default MarkdownRenderer;
