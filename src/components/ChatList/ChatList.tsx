import React, {useState} from "react";
import {Avatar, Card} from "antd";
import './index.css'
import cs from 'classnames'
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import {tidyContent} from "../../util/tidyContent";
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
                                    tidyContent(item.content).map((item, index2)=>{
                                       return  item.kind === 'plain'? <p key={index2} style={{fontSize: p.fontSize}}>
                                            {item.content}
                                        </p>: <CodeDisplay  language={'js'} code={item.content} key={index2}/>
                                    })
                                }
                            </div>
                        </Card>
                    </div>)
                })
            }
        </div>
    )
}