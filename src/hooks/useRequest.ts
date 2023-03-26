import {requestAns} from "../api/config";
import {useEffect, useState} from "react";
import {ChatCompletionRequestMessage} from "openai";
import {Chat} from "../components/ChatList/ChatList";
import {useCookies} from "react-cookie";
import {openAIToken} from "../util/constanst";
import {MessageInstance} from "antd/es/message/interface";
import {useAppDispatch} from "./storeHooks";
import {setLoading} from "../store/reducer/chat";
import useAllStates from "./useAllStates";

interface Response {
    systemReply: Chat
}

export default function useRequest( refreshCount: number, messageApi: MessageInstance): Response {
    const dispatch = useAppDispatch();
    const [chat, setChat] = useState<Chat>({content: [], role: "system"})
    const [cookies] = useCookies([openAIToken]);
    const { questionList} = useAllStates();
    useEffect(() => {
        if (questionList.length === 0 || refreshCount === 0) return;
        if (!cookies.openAIToken) {
            console.log('openAIToken none', openAIToken)
            messageApi.open({
                type: 'error',
                content: 'please set OpenAIToken via the top right button',
            })
            return;
        }
        dispatch(setLoading(true))
        // console.log('questionList', questionList, cookies.openAIToken)
        requestAns(questionList, cookies.openAIToken).then((res) => {
            console.log(res)
            if(!res.data){
                messageApi.error(res.data, 4)
            }
            let msg: string[] = []
            res.data.choices.forEach(item => {
                const array = item?.message?.content?.split('\n') || []
                for (const m of array) {
                    if (m.length > 0) {
                        msg.push(m)
                    }
                }
            })
            setChat({
                role: "system",
                content: msg
            })
            dispatch(setLoading(false))
        }).catch(err => {
            messageApi.error(JSON.stringify(err.message), 4)
            dispatch(setLoading(false))
        })
    }, [ refreshCount])

    return { systemReply: chat}

}