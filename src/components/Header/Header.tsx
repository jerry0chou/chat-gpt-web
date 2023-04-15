import React, {Fragment, useState} from "react";
import MyModal from "../Modal/Modal";
import {useAppDispatch} from "../../hooks/storeHooks";
import {setFontSize, setTheme, Theme} from "../../store/reducer/header";
import useAllStates from "../../hooks/useAllStates";
import {
    AddIcon,
    DayIcon, FoldIcon,
    FontMinusIcon,
    FontPlusIcon,
    HeaderContainer, IconContainer, LeftIconContainer,
    NightIcon,
    TokenIcon,
    TrashIcon
} from "./css";
import {clearCurrentTabChat} from "../../store/reducer/chat";
import {addNewChat, foldMenuAction} from "../../store/reducer/menu";
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
    const onItemClick = (kind: 'Token' | 'Clear' | 'Fold' | 'Add' | FontOperation | Theme) => {
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
        } else if (kind === 'Add') {
            dispatch(addNewChat())
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
            {width < SmallDeviceWidth ? <div/> :
                <Fragment>
                    {foldMenu ? <div/> :
                        <LeftIconContainer needAuto={!foldMenu}>
                            <AddIcon onClick={() => onItemClick('Add')}/>
                        </LeftIconContainer>
                    }
                    <LeftIconContainer needAuto={foldMenu}>
                        <FoldIcon isfold={String(foldMenu)} size={19} theme={theme}
                                  onClick={() => onItemClick('Fold')}/>
                    </LeftIconContainer>
                </Fragment>
            }

            <MyModal isOpen={visible} close={() => setVisible(false)}/>
        </HeaderContainer>)
}