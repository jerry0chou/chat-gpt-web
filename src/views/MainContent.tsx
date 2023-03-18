import React, {useEffect, useRef, useState} from "react";
import {requestAns} from "../api/config";
import {ChatCompletionRequestMessage} from "openai";
import {Input, Card, Avatar} from 'antd';
import './views.css'
import InputArea from "../components/InputArea/InputArea";
interface Chat{
    role: 'system' | 'user';
    content: string[]
}
export default function MainContent() {
    console.log('MainContent')
    const url = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg';

    const messages = useRef<ChatCompletionRequestMessage[]>([])
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
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
        setInputValue('')
        requestAPI()
    }
    const onInputChange = (e: any) => {
        setInputValue(e?.target?.value || '')
    }
    return (<div className="main-container">
        <div className="chat-list-container">
            {
                chatList.map((item, index)=>{
                    return (<div className="chat-box" key={index}>
                        <Card style={{width: '95%'}}>
                            {
                                item.role === 'system'?<Avatar size={40} src={url}/>: <Avatar size={40}>USER</Avatar>
                            }
                            {
                                item.content.map((msg)=>{
                                    return(<p>
                                        {msg}
                                    </p>)
                                })
                            }
                        </Card>
                    </div>)
                })
            }
        </div>
        <InputArea loading={loading} onSubmit={onSubmit}/>
    </div>)
}