import React, {useCallback, useState} from "react";
import useAllStates from "../../hooks/useAllStates";
import {InputContainer, TextArea, PositionInputArea, RoundButton, SendIcon, ClearIcon} from "./css";
import {useAppDispatch} from "../../hooks/storeHooks";
import {setInputString} from "../../store/reducer/input";

export interface InputAreaProps {
    onSubmit: (value: string) => void
}

export default function InputArea(p: InputAreaProps) {
    const {theme, foldMenu, inputString} = useAllStates()
    const dispatch = useAppDispatch();
    const initHeight = 70
    const [textAreaHeight, setTextAreaHeight] = useState(initHeight)
    const onInputChange = (e: any) => {
        const value = e?.target?.value || ''
        const lines = value.split('\n')
        const lineCount = lines.length
        let height = (lineCount-1) * 20 + initHeight
        if(height > 300) height = 300
        setTextAreaHeight(height)
        dispatch(setInputString(value));
    }
    const onKeyUp = useCallback((e: any) => {
        console.log('code', e.code)
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            if(inputString === '') return
            p.onSubmit(inputString)
            clearText()
            setTextAreaHeight(initHeight)
        }
    }, [inputString])
    const clearText = () => {
        dispatch(setInputString(''))
    }
    return (
        <PositionInputArea foldMenu={foldMenu}>
            <InputContainer theme={theme} height={textAreaHeight}>
                <TextArea theme={theme} height={textAreaHeight-30} value={inputString} onKeyUp={onKeyUp} onChange={onInputChange}/>
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