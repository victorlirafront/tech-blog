import React from 'react';
import ReactMarkdown from 'react-markdown';

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
