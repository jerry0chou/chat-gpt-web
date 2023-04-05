import React from "react";
import {Avatar, Card} from "antd";
import './index.css'
import cs from 'classnames'
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import {tidyContent} from "../../util/tidyContent";
import PlainTextDisplay from "../PlainTextDisplay/PlainTextDisplay";
import useAllStates from "../../hooks/useAllStates";
import {CardContainer, ChatListContainer} from "./css";

export interface Chat {
    role: 'system' | 'user';
    content: string[]
}


export default function ChatList() {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg';
    const {fontSize, chatList, theme} = useAllStates()
    return (
        <ChatListContainer>
            {
                chatList.map((item, index) => {
                    return (<div className="chat-box" key={index}>
                        <CardContainer theme={theme}>
                            {
                                item.role === 'system' ? <div className="profile-container">
                                    <Avatar size={40} src={url}/>
                                </div> : <div className="profile-container">
                                    <Avatar size={40} style={{backgroundColor: '#2a88f3', color: '#e9eef1'}}>User</Avatar>
                                </div>
                            }
                            <div className="content-container">
                                {
                                    tidyContent(item.content).map((item, index2) => {
                                        return (
                                            <div key={index2}>
                                                {item.kind === 'plain' ?
                                                    <PlainTextDisplay content={item.content} fontSize={fontSize}/> :
                                                    <CodeDisplay language={item.language || 'js'} code={item.content} key={index2}/>}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </CardContainer>
                    </div>)
                })
            }
        </ChatListContainer>
    )
}