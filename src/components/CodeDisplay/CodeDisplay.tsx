import React from "react";
import ReactMarkdown from 'react-markdown'

// @ts-ignore
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// @ts-ignore
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {message} from "antd";
import useAllStates from "../../hooks/useAllStates";
import {CodeDisplayContainer, CopyContainer, MarkdownContainer} from "./css";
import {CopyIcon} from "../ChatList/css";
import {Theme} from "../../store/reducer/header";

interface CodeDisplayProps {
    language: string,
    code: string
}

export default function CodeDisplay(p: CodeDisplayProps) {
    const markdown = `
~~~${p.language}
${p.code}
~~~
`
    const [messageApi, contextHolder] = message.useMessage();
    const {fontSize, theme} = useAllStates()
    const onCopyClick = () => {
        console.log('click')
        navigator.clipboard.writeText(p.code).then(() => {
            messageApi.success('copy code successfully')
        }).catch(() => {
            messageApi.error('copy code failed')
        })
    }
    return (
        <CodeDisplayContainer>
            <MarkdownContainer fontSize={fontSize}>
                {contextHolder}
                <ReactMarkdown
                    children={markdown}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    language={match[1]}
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </MarkdownContainer>
            <CopyContainer onClick={onCopyClick}>
                <CopyIcon size={20} theme={Theme.day}></CopyIcon>
            </CopyContainer>
        </CodeDisplayContainer>
    )
}
