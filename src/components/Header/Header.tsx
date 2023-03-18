import React, {useState} from "react";
import './index.css'
import {Avatar, Spin, Tag} from 'antd';
import MyModal from "../Modal/Modal";
import {apiModelName} from "../../util/constanst";
import { LoadingOutlined } from '@ant-design/icons';

export type FontKind = 'A+' |'A-'
interface SettingProps{
    loading: boolean
    adjustFontSize: (kind: FontKind)=>void
}
export default function Header(p: SettingProps){
    const [visible, setVisible] = useState(false)
    const onItemClick = (kind: 'Token' | FontKind)=>{
        if(kind === 'Token'){
            setVisible(true)
        }else {
            p.adjustFontSize(kind)
        }
    }
    const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;
    return(<div className="header-container">
        <Avatar onClick={()=>onItemClick('Token')} style={{ backgroundColor: '#d1f1e9', color: '#0288a2', marginRight: 12 }}>T</Avatar>
        <Avatar onClick={()=> onItemClick('A+')} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A+</Avatar>
        <Avatar onClick={()=> onItemClick('A-')} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A-</Avatar>
        <Tag color="blue">Copyright@Jerry</Tag>
        <Tag color="cyan">{apiModelName}</Tag>
        {
            p.loading? <div className="refresh-status">
            <Spin indicator={antIcon} spinning={p.loading}/>
            </div>: <div/>
        }
        <MyModal isOpen={visible} close={ ()=> setVisible(false)}/>
    </div>)
}