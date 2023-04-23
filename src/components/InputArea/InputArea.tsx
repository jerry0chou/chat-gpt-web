import React, {useCallback, useEffect, useRef, useState} from "react";
import {Button} from "antd";
import useAllStates from "../../hooks/useAllStates";
import {InputContainer, Input, PositionInputArea, RoundButton, SendIcon, ClearIcon} from "./css";
import {useAppDispatch} from "../../hooks/storeHooks";
import {setInputString} from "../../store/reducer/input";

export interface InputAreaProps {
    onSubmit: (value: string) => void
}

export default function InputArea(p: InputAreaProps) {
    const {theme, foldMenu, inputString} = useAllStates()
    const dispatch = useAppDispatch();

    const onInputChange = (e: any) => {
        dispatch(setInputString(e?.target?.value || ''));
    }
    const onKeyUp = useCallback((e: any) => {
        if (e.code === 'Enter') {
            p.onSubmit(inputString)
            clearText()
        }
    }, [inputString])
    const clearText = () => {
        dispatch(setInputString(''))
    }
    return (
        <PositionInputArea foldMenu={foldMenu}>
            <InputContainer theme={theme}>
                <Input theme={theme} value={inputString} onKeyUp={onKeyUp} onChange={onInputChange}/>
                <RoundButton direction={'right'} onClick={() => {
                    p.onSubmit(inputString)
                    clearText()
                }
                }>
                    <SendIcon/>
                </RoundButton>
                <RoundButton direction={'left'} onClick={clearText}>
                    <ClearIcon/>
                </RoundButton>
            </InputContainer>
        </PositionInputArea>
    )
}