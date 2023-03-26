import React, {useRef, useState} from "react";
import {Input} from "antd";
import './index.css'
import {ChatCompletionRequestMessage} from "openai";
import useAllStates from "../../hooks/useAllStates";
const {Search} = Input;
export interface InputAreaProps{
    onSubmit: (value:string)=>void
}
export default function InputArea(p: InputAreaProps){
    const {loading, questionList} = useAllStates()
    const [inputValue, setInputValue] = useState('')
    const currentIndex = useRef(questionList.length-1)
    const onInputChange = (e: any) => {
        setInputValue(e?.target?.value || '')
    }
    const onKeyUp = (e: any)=>{
        let index = currentIndex.current
        if(e.code === 'ArrowUp' && index>=1){
           setInputValue(questionList[index-1].content)
            index-=1
        }else if(e.code === 'ArrowDown'&& index<questionList.length-1){
            setInputValue(questionList[index+1].content)
            index+=1
        }
        currentIndex.current = index
    }
    return (<div>
        <div className="position-input-area">
            <div className="input-area-container">
                <Search style={{width: '95%'}} placeholder="input questions here~ "
                        enterButton="Submit" size="large"
                        loading={loading}
                        allowClear
                        value={inputValue}
                        onKeyUp={onKeyUp}
                        onChange={onInputChange}
                        onSearch={(value)=>{
                            setInputValue('')
                            p.onSubmit(value)
                        }}
                />
            </div>
        </div>
    </div>)
}