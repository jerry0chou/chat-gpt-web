import React, {useEffect, useRef, useState} from "react";
import {requestAns} from "../api/config";
import {ChatCompletionRequestMessage} from "openai";
import {Input, Card, Avatar} from 'antd';
import './views.css'
import InputArea from "../components/InputArea/InputArea";
import ChatList, {Chat} from "../components/ChatList/ChatList";
import useRequest from "../hooks/useRequest";
import Setting from "../components/Setting/Setting";

export default function MainContent() {
    const messages = useRef<ChatCompletionRequestMessage[]>([])
    const [refreshCount, setRefreshCount] = useState(0)
    const {loading ,systemReply} = useRequest(messages.current, refreshCount)
    const [chatList, setChatList] = useState<Chat[]>([])

    useEffect(()=>{
        if(systemReply.content.length>0){
            console.log('systemReply', systemReply)
            setChatList(prevState => prevState.concat(systemReply))
        }
    }, [systemReply])
    const onSubmit = (value: string) => {
        if(value.length === 0) return;
        const user: Chat ={
            role: "user",
            content: [value]
        }
        chatList.push(user)
        messages.current.push({
            role: "user",
            content: value
        })
        console.log('messges', messages)
        setChatList([...chatList])
        setRefreshCount(prevState => prevState+1)
    }
    return (<div className="main-container">
        <Setting/>
        <ChatList data={chatList}/>
        <InputArea loading={loading} onSubmit={onSubmit}/>
    </div>)
}