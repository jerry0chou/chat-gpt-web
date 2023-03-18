import React from "react";
import './index.css'
import {
    TagsOutlined
} from '@ant-design/icons';
import { Avatar, Space } from 'antd';


export default function Setting(){
    const onItemClick = (kind: 'Token' | 'A+' | 'A-')=>{
        console.log('kind', kind)
    }
    return(<div className="setting-container">
        <Avatar onClick={()=>onItemClick('Token')} style={{ backgroundColor: '#d1f1e9', color: '#0288a2', marginRight: 12 }}>T</Avatar>
        <Avatar onClick={()=> onItemClick('A+')} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A+</Avatar>
        <Avatar onClick={()=> onItemClick('A-')} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A-</Avatar>
    </div>)
}