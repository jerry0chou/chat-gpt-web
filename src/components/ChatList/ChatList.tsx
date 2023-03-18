import React, {useState} from "react";
import {Avatar, Card} from "antd";
import './index.css'
export interface Chat{
    role: 'system' | 'user';
    content: string[]
}

export interface ChatListProps{
    data: Chat[]
}
export default function ChatList(p: ChatListProps){
    // const [chatList, setChatList] = useState<Chat[]>([])
    const url = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg';

    return(
        <div className="chat-list-container">
            {
                p.data.map((item, index)=>{
                    return (<div className="chat-box" key={index}>
                        <Card style={{width: '95%'}}>
                            {
                                item.role === 'system'?<Avatar size={40} src={url}/>: <Avatar size={40}>USER</Avatar>
                            }
                            {
                                item.content.map((msg, index)=>{
                                    return(<p key={index}>
                                        {msg}
                                    </p>)
                                })
                            }
                        </Card>
                    </div>)
                })
            }
        </div>
    )
}