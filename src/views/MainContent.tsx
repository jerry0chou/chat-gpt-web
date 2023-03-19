import React, {useEffect, useRef, useState} from "react";
import {ChatCompletionRequestMessage} from "openai";
import {message} from 'antd';
import './views.css'
import InputArea from "../components/InputArea/InputArea";
import ChatList, {Chat} from "../components/ChatList/ChatList";
import useRequest from "../hooks/useRequest";
import Header, {FontKind} from "../components/Header/Header";
import {useCookies} from "react-cookie";
import {fontSizeValue} from "../util/constanst";

export default function MainContent() {
    const messages = useRef<ChatCompletionRequestMessage[]>([])
    const [refreshCount, setRefreshCount] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const {loading, systemReply} = useRequest(messages.current, refreshCount, messageApi)
    const [chatList, setChatList] = useState<Chat[]>([])
    const [cookies, setCookie] = useCookies([fontSizeValue]);
    const fontSize = useRef<number>(Number(cookies.fontSizeValue) || 18)
    const scrollRef = useRef(null)

    const scrollToBottom = () => {
        // @ts-ignore
        if (scrollRef.current && scrollRef.current?.scrollIntoView) { // @ts-ignore
            scrollRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }

    useEffect(() => {
        if (systemReply.content.length > 0) {
            setChatList(prevState => prevState.concat(systemReply))
            scrollToBottom()
        }
    }, [systemReply])
    const onSubmit = (value: string) => {
        if (value.length === 0) return;
        const user: Chat = {
            role: "user",
            content: [value]
        }
        chatList.push(user)
        messages.current.push({
            role: "user",
            content: value
        })
        setChatList([...chatList])
        setRefreshCount(prevState => prevState + 1)
    }
    const adjustFontSize = (kind: FontKind) => {
        if (kind === 'A+')
            fontSize.current += 1
        else
            fontSize.current -= 1
        setCookie(fontSizeValue, Number(fontSize.current))
    }
    return (<div className="main-container">
        {contextHolder}
        <Header adjustFontSize={adjustFontSize} loading={loading}/>
        <ChatList data={chatList} fontSize={fontSize.current}/>
        <InputArea loading={loading} onSubmit={onSubmit}/>
        <div ref={scrollRef}/>
    </div>)
}