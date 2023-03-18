import React, {useState} from 'react';
import './views.css'
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps, MenuTheme} from 'antd';
import {Menu, Switch} from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'ChatGPT',
        key: 'A',
        icon: <SettingOutlined/>,
    },
    {
        label: 'Hello world',
        key: 'B',
        icon: <MailOutlined/>,
    },
];
export default function SideMenu() {
    const [theme, setTheme] = useState<MenuTheme>('dark');
    const [current, setCurrent] = useState('A');
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div className="side-menu-container">
            <Menu style={{width: 256, height: '100vh'}} theme={theme}
                  onClick={onClick}
                  selectedKeys={[current]} mode="inline"
                  items={items}/>
        </div>

    )
}