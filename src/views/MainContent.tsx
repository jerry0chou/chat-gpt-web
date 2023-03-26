import React, {useEffect, useRef, useState} from "react";
import {ChatCompletionRequestMessage} from "openai";
import {message} from 'antd';
import './views.css'
import InputArea from "../components/InputArea/InputArea";
import ChatList, {Chat} from "../components/ChatList/ChatList";
import useRequest from "../hooks/useRequest";
import Header from "../components/Header/Header";
export default function MainContent() {
    const messages = useRef<ChatCompletionRequestMessage[]>([])
    const [refreshCount, setRefreshCount] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const {systemReply} = useRequest(messages.current, refreshCount, messageApi)
    const [chatList, setChatList] = useState<Chat[]>([])
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
    return (<div className="main-container">
        {contextHolder}
        <Header/>
        <ChatList data={chatList}/>
        <InputArea onSubmit={onSubmit} userQuestion={messages.current}/>
        <div ref={scrollRef}/>
    </div>)
}