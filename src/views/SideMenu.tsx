import React, {useEffect, useState} from 'react';
import useAllStates from "../hooks/useAllStates";
import {useAppDispatch} from "../hooks/storeHooks";
import {updateChatListFromLocalStorage} from "../store/reducer/chat";
import {SideMenuContainer} from "./css";
import SideMenuItem from "../components/SideMenuItem/SideMenuItem";
import TagContainer from "../components/TagContainer/TagContainer";
import {EmptyItem} from "../components/SideMenuItem/css";
import {addNewChat, updateTitle} from "../store/reducer/menu";

export default function SideMenu() {
    const dispatch = useAppDispatch();
    const {menuList, currentTabKey, theme} = useAllStates()
    useEffect(() => {
        if (menuList.length === 0) {
            dispatch(addNewChat())
        }
    }, [menuList])

    useEffect(() => {
        const title = menuList.find(item => item.key === currentTabKey)?.title || ''
        if (title) {
            dispatch(updateTitle({key: currentTabKey, title}))
        }
    }, [currentTabKey, menuList])


    useEffect(() => {
        dispatch(updateChatListFromLocalStorage())
    }, [currentTabKey])
    return (
        <SideMenuContainer theme={theme}>
            {menuList.map((item, index) => {
                return <SideMenuItem id={item.key} key={item.key} isActive={item.key === currentTabKey}
                                     text={item.title} editTime={item.editTime}/>
            })}
            <EmptyItem/>
            <TagContainer/>
        </SideMenuContainer>
    )
}