import React, {useState} from "react";
import './index.css'
import {Tag} from 'antd';
import MyModal from "../Modal/Modal";
import {apiModelName} from "../../util/constanst";
import {LoadingOutlined, SyncOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../hooks/storeHooks";
import {setFontSize} from "../../store/reducer/header";
import useAllStates from "../../hooks/useAllStates";
import {DayIcon, FontMinusIcon, FontPlusIcon, NightIcon, TokenIcon} from "./css";

export type FontKind = 'A+' | 'A-'
export default function Header() {
    const dispatch = useAppDispatch();
    const {loading} = useAllStates()
    const [visible, setVisible] = useState(false)
    const onItemClick = (kind: 'Token' | FontKind) => {
        if (kind === 'Token') {
            setVisible(true)
        } else if (kind === 'A+') {
            dispatch(setFontSize(1))
        } else if (kind === 'A-') {
            dispatch(setFontSize(-1))
        }
    }
    const antIcon = <LoadingOutlined style={{fontSize: 32}} spin/>;
    return (<div className="header-container">
        <TokenIcon style={{marginRight: 12}} size={26} color={'black'} onClick={() => onItemClick('Token')}/>
        <DayIcon size={26} color={'black'}/>
        <NightIcon size={26} color={'black'}/>
        <FontMinusIcon size={32} color={'black'} onClick={() => onItemClick('A-')}/>
        <FontPlusIcon size={32} color={'black'} onClick={() => onItemClick('A+')}/>
        <Tag>Copyright@Jerry</Tag>
        <Tag>{apiModelName}</Tag>
        {
            loading ? <SyncOutlined spin/> : <div/>
        }
        <MyModal isOpen={visible} close={() => setVisible(false)}/>
    </div>)
}