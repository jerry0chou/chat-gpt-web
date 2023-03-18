import React, {useState} from "react";
import './index.css'
import { Avatar, Space } from 'antd';
import MyModal from "../Modal/Modal";


export default function Setting(){
    const [visible, setVisible] = useState(false)
    const onItemClick = (kind: 'Token' | 'A+' | 'A-')=>{
        console.log('kind', kind)
        if(kind === 'Token'){
            setVisible(true)
        }
    }
    return(<div className="setting-container">
        <Avatar onClick={()=>onItemClick('Token')} style={{ backgroundColor: '#d1f1e9', color: '#0288a2', marginRight: 12 }}>T</Avatar>
        <Avatar onClick={()=> onItemClick('A+')} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A+</Avatar>
        <Avatar onClick={()=> onItemClick('A-')} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A-</Avatar>
        <MyModal isOpen={visible} close={ ()=> setVisible(false)}/>
    </div>)
}