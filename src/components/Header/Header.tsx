import React, {useState} from "react";
import './index.css'
import MyModal from "../Modal/Modal";
import {LoadingOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../hooks/storeHooks";
import {setFontSize, setTheme, Theme} from "../../store/reducer/header";
import useAllStates from "../../hooks/useAllStates";
import {
    DayIcon,
    FontMinusIcon,
    FontPlusIcon,
    HeaderContainer,
    NightIcon,
    TokenIcon,
} from "./css";
import {Tag} from 'antd';
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
        } else if (kind === Theme.day) {
            dispatch(setTheme(Theme.night))
        } else if (kind === Theme.night) {
            dispatch(setTheme(Theme.day))
        }
    }
    const antIcon = <LoadingOutlined style={{fontSize: 32}} spin/>;
    // @ts-ignore
    return (
        <HeaderContainer theme={theme}>
            <div className="icon-container" style={{marginRight: 12}} >
                <TokenIcon size={20} theme={theme} onClick={() => onItemClick('Token')}/>
            </div>
            {
                theme === 'day' ? <div className="icon-container">
                    <DayIcon  size={20} theme={theme} onClick={() => onItemClick(Theme.day)}/>
                    </div>:<div className="icon-container">
                    <NightIcon  size={20} theme={theme} onClick={() => onItemClick(Theme.night)}/>
                </div>
            }
            <div className="icon-container">
                <FontMinusIcon  size={23} theme={theme} onClick={() => onItemClick(FontOperation.FontMinus)}/>
            </div>
            <div className="icon-container">
                <FontPlusIcon  size={23} theme={theme} onClick={() => onItemClick(FontOperation.FontPlus)}/>
            </div>
            <MyModal isOpen={visible} close={() => setVisible(false)}/>
        </HeaderContainer>)
}