import React, {useState} from "react";
import MyModal from "../Modal/Modal";
import {LoadingOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../hooks/storeHooks";
import {setFontSize, setTheme, Theme} from "../../store/reducer/header";
import useAllStates from "../../hooks/useAllStates";
import {
    DayIcon,
    FontMinusIcon,
    FontPlusIcon,
    HeaderContainer, IconContainer,
    NightIcon,
    TokenIcon,
    TrashIcon
} from "./css";
import {Tag} from 'antd';
import {clearCurrentTabChat} from "../../store/reducer/chat";

export enum FontOperation {
    FontPlus = 'A+',
    FontMinus = 'A-'
}

export default function Header() {
    const dispatch = useAppDispatch();
    const {loading, theme} = useAllStates()
    const [visible, setVisible] = useState(false)
    const onItemClick = (kind: 'Token' | 'Clear' | FontOperation | Theme) => {
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
        } else if(kind === 'Clear'){
            dispatch(clearCurrentTabChat())
        }
    }
    // @ts-ignore
    return (
        <HeaderContainer theme={theme}>
            <IconContainer style={{marginRight: 12}}>
                <TokenIcon size={20} theme={theme} onClick={() => onItemClick('Token')}/>
            </IconContainer>
            {
                theme === 'day' ? <IconContainer>
                    <DayIcon size={20} theme={theme} onClick={() => onItemClick(Theme.day)}/>
                </IconContainer> : <IconContainer>
                    <NightIcon size={20} theme={theme} onClick={() => onItemClick(Theme.night)}/>
                </IconContainer>
            }
            <IconContainer>
                <FontMinusIcon size={23} theme={theme} onClick={() => onItemClick(FontOperation.FontMinus)}/>
            </IconContainer>
            <IconContainer>
                <FontPlusIcon size={23} theme={theme} onClick={() => onItemClick(FontOperation.FontPlus)}/>
            </IconContainer>
            <IconContainer isClear={true}>
                <TrashIcon size={19} theme={theme} onClick={() => onItemClick('Clear')}/>
            </IconContainer>
            <MyModal isOpen={visible} close={() => setVisible(false)}/>
        </HeaderContainer>)
}