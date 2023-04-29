import React from "react";
import {message} from "antd";
import useAllStates from "../../hooks/useAllStates";
import {CodeDisplayContainer, CopyContainer, LanguageContainer, MarkdownContainer} from "./css";
import {CopyIcon} from "../ChatList/css";
import {Theme} from "../../store/reducer/header";

import createMD from 'markdown-it'
import hljs from 'highlight.js/lib/common'
// import 'highlight.js/styles/github-dark.css'
import 'highlight.js/styles/github.css'
// @ts-ignore
import mk from 'markdown-it-katex'
import parse from 'html-react-parser'

interface CodeDisplayProps {
    language: string,
    code: string
}

export const renderer = createMD({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, {language: lang}).value
            } catch (err) {
                console.error(err)
            }
        }
        return ''
    },
    typographer: true,
}).use(mk)

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
                {parse(renderer.render(markdown))}
            </MarkdownContainer>
            <CopyContainer onClick={onCopyClick}>
                <CopyIcon size={16} theme={Theme.day}></CopyIcon>
            </CopyContainer>
            {p.language !== 'js' && <LanguageContainer>
                {p.language}
            </LanguageContainer>}
        </CodeDisplayContainer>
    )
}
