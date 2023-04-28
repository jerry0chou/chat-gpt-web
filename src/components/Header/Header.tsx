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
    HeaderContainer, IconContainer,
    NightIcon,
    TokenIcon,
    TrashIcon,
    GithubIconContainer,
    GithubIcon, TitleContainer
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
    const {theme, foldMenu, currentTitle} = useAllStates()
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
    const jumpToGithub = () => {
        window.open('https://github.com/jerry0chou/chat-gpt-web');
    }
    // @ts-ignore
    return (
        <Fragment>
            <HeaderContainer theme={theme}>
                {width < SmallDeviceWidth ? <div/> :
                    <Fragment>
                        <IconContainer area={'fold'}>
                            <FoldIcon isfold={String(foldMenu)} size={19} theme={theme}
                                      onClick={() => onItemClick('Fold')}/>
                        </IconContainer>
                        {foldMenu ? <div/> :
                            <IconContainer area={'add'}>
                                <AddIcon onClick={() => onItemClick('Add')}/>
                            </IconContainer>
                        }
                    </Fragment>
                }
                {!foldMenu && <TitleContainer>{currentTitle}</TitleContainer>}
                <IconContainer isClear={true} area={'delete'}>
                    <TrashIcon size={19} theme={theme} onClick={() => onItemClick('Clear')}/>
                </IconContainer>

                <IconContainer area={'fontPlus'}>
                    <FontPlusIcon size={23} theme={theme} onClick={() => onItemClick(FontOperation.FontPlus)}/>
                </IconContainer>
                <IconContainer area={'fontMinus'}>
                    <FontMinusIcon size={23} theme={theme} onClick={() => onItemClick(FontOperation.FontMinus)}/>
                </IconContainer>
                {
                    theme === 'day' ? <IconContainer area={'theme'}>
                        <DayIcon size={20} theme={theme} onClick={() => onItemClick(Theme.day)}/>
                    </IconContainer> : <IconContainer area={'theme'}>
                        <NightIcon size={20} theme={theme} onClick={() => onItemClick(Theme.night)}/>
                    </IconContainer>
                }
                <IconContainer area={'token'}>
                    <TokenIcon size={20} theme={theme} onClick={() => onItemClick('Token')}/>
                </IconContainer>
                <GithubIconContainer area={'github'} style={{marginRight: 12}} size={31} onClick={jumpToGithub}>
                    <GithubIcon size={26}/>
                </GithubIconContainer>
            </HeaderContainer>
            <MyModal isOpen={visible} close={() => setVisible(false)}/>
        </Fragment>
    )
}