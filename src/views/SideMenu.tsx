import React, {useEffect, useState} from 'react';
import './views.css'
import {MailOutlined, PlusOutlined} from '@ant-design/icons';
import type {MenuProps, MenuTheme} from 'antd';
import {Menu} from 'antd';
import useAllStates from "../hooks/useAllStates";
import {useAppDispatch} from "../hooks/storeHooks";
import {MenuItem, setCurrentTabKey, setMenuList} from "../store/reducer/menu";
import {updateChatListFromLocalStorage} from "../store/reducer/chat";
export default function SideMenu() {
    const dispatch = useAppDispatch();
    const [theme, setTheme] = useState<MenuTheme>('dark');
    const {menuList, currentTabKey} = useAllStates()
    const [localMenuList, setLocalMenuList] = useState<MenuProps['items']>([{
        label: 'New Chat',
        key: '0',
        icon: <PlusOutlined/>,
    },
        ...menuList
    ])
    console.log('menuList', menuList)
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };
    useEffect(()=>{
        dispatch(updateChatListFromLocalStorage())
    }, [currentTabKey])
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        if (e.key === '0') {
            const newKey = String(new Date().getTime())
            const newMenu: MenuItem = {
                label: 'New Chat' + localMenuList?.length,
                key: newKey
            }
            setLocalMenuList(prevState => prevState?.concat(newMenu))
            dispatch(setMenuList(menuList.concat(newMenu)))
            dispatch(setCurrentTabKey(newKey))
        } else {
            dispatch(setCurrentTabKey(e.key))
        }
    };
    return (
        <div className="side-menu-container">
            <Menu style={{width: 256, height: '100vh'}} theme={theme}
                  onClick={onClick}
                  selectedKeys={[currentTabKey]} mode="inline"
                  items={localMenuList}/>
        </div>

    )
}