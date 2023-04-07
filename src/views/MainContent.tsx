import React, {useEffect, useRef, useState} from "react";
import {message} from 'antd';
import InputArea from "../components/InputArea/InputArea";
import ChatList, {Chat} from "../components/ChatList/ChatList";
import useRequest from "../hooks/useRequest";
import useAllStates from "../hooks/useAllStates";
import {useAppDispatch} from "../hooks/storeHooks";
import {setChatList} from "../store/reducer/chat";
import {init} from "../store/reducer/menu";
import {MainContainer} from "./css";

export default function MainContent() {
    const dispatch = useAppDispatch();
    const [refreshCount, setRefreshCount] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    useRequest(refreshCount, messageApi)
    const {chatList, isInit, theme, loading, currentStreamChat} = useAllStates()
    const scrollRef = useRef(null)

    const scrollToBottom = () => {
        // @ts-ignore
        setTimeout(() => {
            // @ts-ignore
            if (scrollRef.current && scrollRef.current?.scrollIntoView) {
                // @ts-ignore
                scrollRef.current?.scrollIntoView({top: document.body.scrollHeight, behavior: "smooth"})
            }
        }, 100)
    }
    useEffect(() => {
        scrollToBottom()
    }, [currentStreamChat])


    useEffect(() => {
        if (loading) {
            const lastChat = chatList[chatList.length - 1]
            if (lastChat.role === 'system') {
                const leftChatList = chatList.slice(0, - 1)
                dispatch(setChatList(leftChatList.concat(currentStreamChat)))
            } else {
                let chat: Chat = {
                    role: 'system',
                    content: ['Loading...']
                }
                if(currentStreamChat.content.length > 0){
                    chat = currentStreamChat
                }
                dispatch(setChatList(chatList.concat(chat)))
            }
        }
    }, [currentStreamChat, loading])

    const onSubmit = (value: string) => {
        if (value.length === 0) return;
        const user: Chat = {
            role: "user",
            content: [value]
        }
        if (!isInit) {
            dispatch(init())
        }
        const newChatList = chatList.concat(user)
        dispatch(setChatList(newChatList))
        setRefreshCount(prevState => prevState + 1)
    }
    return (<MainContainer theme={theme}>
        {contextHolder}
        <ChatList/>
        <InputArea onSubmit={onSubmit}/>
        <div style={{width: 1, height: 1}} ref={scrollRef}/>
    </MainContainer>)
}