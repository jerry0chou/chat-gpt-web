import React, {useCallback, useEffect, useRef, useState} from "react";
import {Button} from "antd";
import useAllStates from "../../hooks/useAllStates";
import {InputContainer, Input, PositionInputArea, RoundButton, SendIcon, ClearIcon} from "./css";

export interface InputAreaProps {
    onSubmit: (value: string) => void
}

export default function InputArea(p: InputAreaProps) {
    const {loading, questionList, theme, foldMenu, currentTabKey, chatList} = useAllStates()
    const [inputValue, setInputValue] = useState('')
    const currentIndex = useRef(questionList.length)
    const onInputChange = (e: any) => {
        setInputValue(e?.target?.value || '')
    }
    const isValidIndex = (index: number) => {
        return index >= 0 && index < questionList.length
    }
    const onKeyUp = useCallback((e: any) => {
        let index = currentIndex.current
        if (e.code === 'ArrowUp') {
            if(isValidIndex(index - 1)){
                setInputValue(questionList[index - 1].content)
                index -= 1
            }
        } else if (e.code === 'ArrowDown') {
            if(isValidIndex(index + 1)){
                setInputValue(questionList[index + 1].content)
                index += 1
            }
        } else if (e.code === 'Enter') {
            setInputValue('')
            p.onSubmit(inputValue)
        }
        currentIndex.current = index
    }, [questionList])
    const ClearText = () => {
        setInputValue('')
    }
    return (
        <PositionInputArea foldMenu={foldMenu}>
            <InputContainer theme={theme}>
                <Input theme={theme} value={inputValue} onKeyUp={onKeyUp} onChange={onInputChange}/>
                <RoundButton direction={'right'} onClick={() => {
                    ClearText()
                    p.onSubmit(inputValue)
                }
                }>
                    <SendIcon/>
                </RoundButton>
                <RoundButton direction={'left'} onClick={ClearText}>
                    <ClearIcon/>
                </RoundButton>
            </InputContainer>
        </PositionInputArea>
    )
}