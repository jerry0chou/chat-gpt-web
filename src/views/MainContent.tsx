import React, {useEffect, useRef, useState} from "react";
import {message} from 'antd';
import './views.css'
import InputArea from "../components/InputArea/InputArea";
import ChatList, {Chat} from "../components/ChatList/ChatList";
import useRequest from "../hooks/useRequest";
import Header from "../components/Header/Header";
import useAllStates from "../hooks/useAllStates";
import {useAppDispatch} from "../hooks/storeHooks";
import {setChatList} from "../store/reducer/chat";
import {init} from "../store/reducer/menu";
export default function MainContent() {
    const dispatch = useAppDispatch();
    const [refreshCount, setRefreshCount] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const {systemReply} = useRequest(refreshCount, messageApi)
    const {chatList, isInit} = useAllStates()
    const scrollRef = useRef(null)

    const scrollToBottom = () => {
        // @ts-ignore
        if (scrollRef.current && scrollRef.current?.scrollIntoView) { // @ts-ignore
            scrollRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }

    useEffect(() => {
        if (systemReply.content.length > 0) {
            dispatch(setChatList(chatList.concat(systemReply)))
            scrollToBottom()
        }
    }, [systemReply])
    const onSubmit = (value: string) => {
        if (value.length === 0) return;
        const user: Chat = {
            role: "user",
            content: [value]
        }
        if(!isInit){
            dispatch(init())
        }
        const newChatList = chatList.concat(user)
        dispatch(setChatList(newChatList))
        setRefreshCount(prevState => prevState + 1)
    }
    return (<div className="main-container">
        {contextHolder}
        <Header/>
        <ChatList/>
        <InputArea onSubmit={onSubmit}/>
        <div ref={scrollRef}/>
    </div>)
}