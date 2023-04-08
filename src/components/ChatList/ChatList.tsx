import React from "react";
import {Avatar} from "antd";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import {tidyContent} from "../../util/tidyContent";
import PlainTextDisplay from "../PlainTextDisplay/PlainTextDisplay";
import useAllStates from "../../hooks/useAllStates";
import {CardContainer, ChatListContainer, ContentContainer, ProfileContainer} from "./css";

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
                    return (
                        <CardContainer key={index} theme={theme}>
                            {
                                item.role === 'system' ? <ProfileContainer role={'system'}>
                                    <Avatar size={40} src={url}/>
                                </ProfileContainer> : <ProfileContainer role={'user'}>
                                    <Avatar size={40} style={{backgroundColor: '#2a88f3', color: '#e9eef1'}}>User</Avatar>
                                </ProfileContainer>
                            }
                            <ContentContainer role={item.role}>
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
                            </ContentContainer>
                        </CardContainer>
                   )
                })
            }
        </ChatListContainer>
    )
}