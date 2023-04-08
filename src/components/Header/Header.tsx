import React, {useState} from "react";
import MyModal from "../Modal/Modal";
import {LoadingOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../hooks/storeHooks";
import {setFontSize, setTheme, Theme} from "../../store/reducer/header";
import useAllStates from "../../hooks/useAllStates";
import {
    DayIcon, FoldIcon,
    FontMinusIcon,
    FontPlusIcon,
    HeaderContainer, IconContainer,
    NightIcon,
    TokenIcon,
    TrashIcon
} from "./css";
import {clearCurrentTabChat} from "../../store/reducer/chat";
import {foldMenuAction} from "../../store/reducer/menu";
import useWindowSize from "../../hooks/useWindowSize";
import {SmallDeviceWidth} from "../../util/constanst";

export enum FontOperation {
    FontPlus = 'A+',
    FontMinus = 'A-'
}

export default function Header() {
    const dispatch = useAppDispatch();
    const {theme, foldMenu} = useAllStates()
    const [visible, setVisible] = useState(false)
    const {width} = useWindowSize();
    const onItemClick = (kind: 'Token' | 'Clear' | 'Fold' | FontOperation | Theme) => {
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
        } else if (kind === 'Clear') {
            dispatch(clearCurrentTabChat())
        } else if (kind === 'Fold') {
            dispatch(foldMenuAction(!foldMenu))
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
            {width< SmallDeviceWidth ? <div/> : <IconContainer style={{marginRight: "auto"}}>
                <FoldIcon isfold={String(foldMenu)} size={19} theme={theme} onClick={() => onItemClick('Fold')}/>
            </IconContainer>}
            <MyModal isOpen={visible} close={() => setVisible(false)}/>
        </HeaderContainer>)
}