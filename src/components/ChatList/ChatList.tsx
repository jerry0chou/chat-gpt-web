import React, {useState} from "react";
import {Avatar, Card} from "antd";
import './index.css'
import cs from 'classnames'
export interface Chat {
    role: 'system' | 'user';
    content: string[]
}

export interface ChatListProps {
    data: Chat[]
    fontSize: number
}

export default function ChatList(p: ChatListProps) {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg';
    // <Avatar size={40} src={url}/>
    // const clsObj = cs({'is-first-line': true})
    console.log('p', p.fontSize)
    return (
        <div className="chat-list-container">
            {
                p.data.map((item, index) => {
                    return (<div className="chat-box" key={index}>
                        <Card style={{width: '95%'}}>
                            {
                                item.role === 'system' ? <div className="profile-container">
                                    <Avatar size={40} src={url}/>
                                </div> : <div className="profile-container">
                                    <Avatar size={40} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
                                </div>
                            }

                            <div className="content-container">
                            {
                                item.content.map((msg, index) => {
                                    return (<p key={index} style={{fontSize: p.fontSize}}>
                                        {msg}
                                    </p>)
                            })}
                            </div>
                        </Card>
                    </div>)
                })
            }
        </div>
    )
}