import React, {useState} from "react";
import './index.css'
import {Tag} from 'antd';
import MyModal from "../Modal/Modal";
import {apiModelName} from "../../util/constanst";
import {LoadingOutlined, SyncOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../hooks/storeHooks";
import {setFontSize, setTheme, Theme} from "../../store/reducer/header";
import useAllStates from "../../hooks/useAllStates";
import {DayIcon, FontMinusIcon, FontPlusIcon, NightIcon, TokenIcon} from "./css";

export enum FontOperation {
    FontPlus = 'A+',
     FontMinus = 'A-'
}
export default function Header() {
    const dispatch = useAppDispatch();
    const {loading, theme} = useAllStates()
    const [visible, setVisible] = useState(false)
    const onItemClick = (kind: 'Token' | FontOperation | Theme) => {
        if (kind === 'Token') {
            setVisible(true)
        } else if (kind === FontOperation.FontPlus) {
            dispatch(setFontSize(1))
        } else if (kind === FontOperation.FontMinus) {
            dispatch(setFontSize(-1))
        } else if(kind === Theme.day) {
            dispatch(setTheme(Theme.night))
        }else if(kind === Theme.night){
            dispatch(setTheme(Theme.day))
        }
    }
    const antIcon = <LoadingOutlined style={{fontSize: 32}} spin/>;
    return (<div className="header-container">
        <TokenIcon style={{marginRight: 12}} size={26} color={'black'} onClick={() => onItemClick('Token')}/>
        {
            theme === 'day' ? <DayIcon size={26} color={'black'} onClick={() => onItemClick(Theme.day)}/> :
                <NightIcon size={26} color={'black'} onClick={() => onItemClick(Theme.night)}/>
        }
        <FontMinusIcon size={32} color={'black'} onClick={() => onItemClick(FontOperation.FontMinus)}/>
        <FontPlusIcon size={32} color={'black'} onClick={() => onItemClick(FontOperation.FontPlus)}/>
        <Tag>Copyright@Jerry</Tag>
        <Tag>{apiModelName}</Tag>
        {
            loading ? <SyncOutlined spin/> : <div/>
        }
        <MyModal isOpen={visible} close={() => setVisible(false)}/>
    </div>)
}