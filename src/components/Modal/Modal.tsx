import React, {useState} from "react";
import {Button, Input, message, Modal} from 'antd';
import {useCookies} from "react-cookie";
import {openAIToken} from "../../util/constanst";
const { Search } = Input;
interface ModalProps{
    isOpen: boolean;
    close: ()=> void;
}
export default function MyModal(p: ModalProps){
    const [messageApi, contextHolder] = message.useMessage();
    const [cookies, setCookie] = useCookies([openAIToken]);
    const handleOk = () => {
        p.close()
    };

    const handleCancel = () => {
        p.close()
    };

    const onSave = (value: string) => {
        console.log(value);
        setCookie('openAIToken', value, { path: '/' });
        p.close()
        messageApi.success('already saved')
    }

    return(<div>
        <Modal title="Please input openAI token"
               open={p.isOpen}
               onOk={handleOk}
               onCancel={handleCancel}
               footer={null}
        >
            <Search
                placeholder="input openAI token here"
                allowClear
                enterButton="Save"
                size="large"
                onSearch={onSave}
            />
        </Modal>
    </div>)
}