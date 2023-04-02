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
import {MainContainer} from "./css";
export default function MainContent() {
    const dispatch = useAppDispatch();
    const [refreshCount, setRefreshCount] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const {systemReply} = useRequest(refreshCount, messageApi)
    const {chatList, isInit, theme} = useAllStates()
    const scrollRef = useRef(null)

    const scrollToBottom = () => {
        // @ts-ignore
        setTimeout(()=>{
            // @ts-ignore
            if (scrollRef.current && scrollRef.current?.scrollIntoView) {
                // @ts-ignore
                scrollRef.current?.scrollIntoView({top: document.body.scrollHeight,behavior: "smooth"})
            }
        },100)
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
    return (<MainContainer theme={theme}>
        {contextHolder}
        <Header/>
        <ChatList/>
        <InputArea onSubmit={onSubmit}/>
        <div style={{color: 'white'}}>I am here</div>
        <div style={{width: 1, height: 1}} ref={scrollRef}/>
    </MainContainer>)
}