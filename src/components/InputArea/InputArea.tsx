import React, {useState} from "react";
import {Input} from "antd";
import './index.css'
const {Search} = Input;
export interface InputAreaProps{
    loading: boolean;
    onSubmit: (value:string)=>void

}
export default function InputArea(p: InputAreaProps){
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e: any) => {
        setInputValue(e?.target?.value || '')
    }
    return (<div>
        <div className="position-input-area">
            <div className="input-area-container">
                <Search style={{width: '95%'}} placeholder="input questions here~ "
                        enterButton="Submit" size="large"
                        loading={p.loading}
                        allowClear
                        value={inputValue}
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