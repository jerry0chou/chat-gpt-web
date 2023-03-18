import React from "react";
import ReactMarkdown from 'react-markdown'
import './index.css'
// @ts-ignore
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// @ts-ignore
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeDisplayProps{
    language: string,
    code: string
}
export default function CodeDisplay(p: CodeDisplayProps) {
    const markdown = `
~~~${p.language}
${p.code}
~~~
`
    return(
        <div>
            <ReactMarkdown
                children={markdown}
                components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={dark}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />

        </div>
    )
}
