import React, {useRef, useState} from "react";
import {Button} from "antd";
import useAllStates from "../../hooks/useAllStates";
import {InputContainer, Input, PositionInputArea} from "./css";
export interface InputAreaProps {
    onSubmit: (value: string) => void
}

export default function InputArea(p: InputAreaProps) {
    const {loading, questionList, theme, foldMenu} = useAllStates()
    const [inputValue, setInputValue] = useState('')
    const currentIndex = useRef(questionList.length - 1)
    const onInputChange = (e: any) => {
        setInputValue(e?.target?.value || '')
    }
    const onKeyUp = (e: any) => {
        let index = currentIndex.current
        if (e.code === 'ArrowUp' && index >= 1) {
            setInputValue(questionList[index - 1].content)
            index -= 1
        } else if (e.code === 'ArrowDown' && index < questionList.length - 1) {
            setInputValue(questionList[index + 1].content)
            index += 1
        } else if (e.code === 'Enter') {
            setInputValue('')
            p.onSubmit(inputValue)
        }
        currentIndex.current = index
    }
    return (
        <PositionInputArea foldMenu={ foldMenu }>
            <InputContainer theme={theme}>
                <Input theme={theme} value={inputValue} onKeyUp={onKeyUp} onChange={onInputChange}/>
                <Button type="primary" size="large" loading={loading} onClick={() => {
                    setInputValue('')
                    p.onSubmit(inputValue)
                }}>Submit</Button>
            </InputContainer>
        </PositionInputArea>
    )
}