import React, {useEffect, useRef, useState} from "react";
import {requestAns} from "../api/config";
import {ChatCompletionRequestMessage} from "openai";
import {Input, Card, Avatar} from 'antd';
import './views.css'
import InputArea from "../components/InputArea/InputArea";
import ChatList, {Chat} from "../components/ChatList/ChatList";

export default function MainContent() {
    console.log('MainContent')
    const messages = useRef<ChatCompletionRequestMessage[]>([])
    const [loading, setLoading] = useState(false)
    const [chatList, setChatList] = useState<Chat[]>([])

    const requestAPI = ()=>{
        setLoading(true)

        requestAns(messages.current).then((res) => {
            console.log(res)
            let msg: string[] = []
            res.data.choices.forEach(item=>{
                const array = item?.message?.content?.split('\n') || []
                console.log('array', array)
                for (const m of array){
                    if(m.length> 0){
                        msg.push(m)
                    }
                }
            })
            chatList.push({
                role: "system",
                content: msg
            })
            setChatList([...chatList])
            setLoading(false)
        }).catch(err=>{
            setLoading(false)
        })
    }
    // @ts-ignore
    const onSubmit = (value) => {
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
        requestAPI()
    }
    return (<div className="main-container">
        <ChatList data={chatList}/>
        <InputArea loading={loading} onSubmit={onSubmit}/>
    </div>)
}