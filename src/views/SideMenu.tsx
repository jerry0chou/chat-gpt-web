import React, {useEffect, useState} from 'react';
import './views.css'
import {MailOutlined, PlusOutlined} from '@ant-design/icons';
import type {MenuProps, MenuTheme} from 'antd';
import {Menu} from 'antd';
import useAllStates from "../hooks/useAllStates";
import {useAppDispatch} from "../hooks/storeHooks";
import {deleteTab, MenuItem, setCurrentTabKey, setMenuList} from "../store/reducer/menu";
import {updateChatListFromLocalStorage} from "../store/reducer/chat";

const NewChat = {
    label: 'New Chat',
    key: '0',
    icon: <PlusOutlined/>,
}
export default function SideMenu() {
    const dispatch = useAppDispatch();
    const [theme, setTheme] = useState<MenuTheme>('dark');
    const {menuList, currentTabKey, isInit} = useAllStates()
    const [localMenuList, setLocalMenuList] = useState<MenuProps['items']>([
        NewChat,
        ...menuList
    ])
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };
    useEffect(() => {
        dispatch(updateChatListFromLocalStorage())
    }, [currentTabKey])

    useEffect(()=>{
        if(!isInit){
            newChat()
        }
    }, [isInit])
    const newChat = () => {
        const newKey = String(new Date().getTime())
        const newMenu: MenuItem = {
            label: 'New Chat' + localMenuList?.length,
            key: newKey
        }
        setLocalMenuList(prevState => prevState?.concat(newMenu))
        dispatch(setMenuList(menuList.concat(newMenu)))
        dispatch(setCurrentTabKey(newKey))
    }
    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === '0') {
            newChat()
        } else {
            dispatch(setCurrentTabKey(e.key))
        }
    };
    const onKeyUp: MenuProps['onKeyUp'] = (e) => {
        // @ts-ignore
        if (localMenuList?.length <= 2) return;
        if ((e.code === 'Delete' || e.code === 'Backspace') && currentTabKey !== '0') {
            const newMenuList = localMenuList?.filter(item => item?.key !== currentTabKey)
            setLocalMenuList(newMenuList)
            dispatch(deleteTab(currentTabKey))
            dispatch(setCurrentTabKey('0'))
        }
    }
    return (
        <div className="side-menu-container">
            <Menu style={{width: 256, height: '100vh'}} theme={theme}
                  onClick={onClick}
                  onKeyUp={onKeyUp}
                  selectedKeys={[currentTabKey]} mode="inline"
                  items={localMenuList}/>
        </div>

    )
}