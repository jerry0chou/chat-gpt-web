import React from "react";
import {message} from "antd";
import useAllStates from "../../hooks/useAllStates";
import {CodeDisplayContainer, CopyContainer, LanguageContainer, MarkdownContainer} from "./css";
import {CopyIcon} from "../ChatList/css";
import {Theme} from "../../store/reducer/header";
import mdRender from "../../util/markdown";
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
                {mdRender(markdown)}
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
