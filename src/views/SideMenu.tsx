import React, {useEffect, useState} from 'react';
import useAllStates from "../hooks/useAllStates";
import {useAppDispatch} from "../hooks/storeHooks";
import {updateChatListFromLocalStorage} from "../store/reducer/chat";
import {SideMenuContainer} from "./css";
import SideMenuItem from "../components/SideMenuItem/SideMenuItem";
import TagContainer from "../components/TagContainer/TagContainer";
import {EmptyItem} from "../components/SideMenuItem/css";
import {addNewChat} from "../store/reducer/menu";
import useTitleRequest from "../hooks/useTitleRequest";

export default function SideMenu() {
    const dispatch = useAppDispatch();
    const {menuList, currentTabKey, theme, questionList, currentTitle} = useAllStates()
    const [freshCount, setFreshCount] = useState(0)
    useTitleRequest(freshCount)
    useEffect(() => {
        if (menuList.length === 0) {
            dispatch(addNewChat())
        }
    }, [menuList])

    useEffect(() => {
        if (!currentTitle || currentTitle.length === 0 || currentTitle.startsWith('New')) {
            if (questionList.length > 3) {
                setFreshCount(prevState => prevState + 1)
            }
        }
    }, [currentTitle, questionList])

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