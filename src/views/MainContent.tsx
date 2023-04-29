import React, {useCallback, useEffect, useRef, useState} from "react";
import {message} from 'antd';
import InputArea from "../components/InputArea/InputArea";
import ChatList, {Chat} from "../components/ChatList/ChatList";
import useRequest from "../hooks/useRequest";
import useAllStates from "../hooks/useAllStates";
import {useAppDispatch} from "../hooks/storeHooks";
import {setChatList} from "../store/reducer/chat";
import {MainContainer} from "./css";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import Guide from "../components/Guide/Guide";
import {updateEditTime} from "../store/reducer/menu";
import useTitleRequest from "../hooks/useTitleRequest";

export default function MainContent() {
    const dispatch = useAppDispatch();
    const [refreshCount, setRefreshCount] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    useRequest(refreshCount, messageApi)
    const {chatList, theme, loading, currentStreamChat, foldMenu, currentTabKey, currentTitle} = useAllStates()
    const scrollRef = useRef(null)
    const mainContainerRef =  useRef(null)
    const [titleFreshCount, setTitleFreshCount] = useState(0)
    useTitleRequest(titleFreshCount)

    const scrollToBottom = () => {
        // @ts-ignore
        setTimeout(() => {
            // @ts-ignore
            if (scrollRef.current && scrollRef.current?.scrollIntoView && mainContainerRef.current.scrollHeight> document.body.scrollHeight) {
                console.log('scroll H', document.body.scrollHeight)
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
                const leftChatList = chatList.slice(0, -1)
                dispatch(setChatList(leftChatList.concat(currentStreamChat)))
            } else {
                let chat: Chat = {
                    role: 'system',
                    content: ['Loading...'],
                    timestamp: new Date().getTime()
                }
                if (currentStreamChat.content.length > 0) {
                    chat = currentStreamChat
                }
                dispatch(setChatList(chatList.concat(chat)))
            }
        }
    }, [currentStreamChat, loading])


    const changeTitle = useCallback(()=>{
        if(!currentTitle || currentTitle.length ===0 || currentTitle.startsWith('New')){
            if(chatList.length>3)
                setTitleFreshCount(prevState => prevState + 1)
        }
    }, [currentTitle, chatList])

    const onSubmit = useCallback((value: string) => {
        if (value.length === 0) return;
        if(loading) return;
        const user: Chat = {
            role: "user",
            content: value.split('\n'),
            timestamp: new Date().getTime()
        }
        console.log('user', user )
        const newChatList = chatList.concat(user)
        dispatch(setChatList(newChatList))
        setRefreshCount(prevState => prevState + 1)
        dispatch(updateEditTime(currentTabKey))
        changeTitle()
    }, [loading, chatList])

    return (<MainContainer theme={theme} foldMenu={foldMenu } ref={mainContainerRef}>
        {contextHolder}
        {chatList.length === 0?<Guide/> :<ChatList/>}
        <InputArea onSubmit={onSubmit}/>
        <div style={{width: 1, height: 1}} ref={scrollRef}/>
    </MainContainer>)
}