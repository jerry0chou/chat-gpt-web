import {requestAns, requestStreamAns} from "../api/config";
import {useEffect, useState} from "react";
import {ChatCompletionRequestMessage} from "openai";
import {Chat} from "../components/ChatList/ChatList";
import {useCookies} from "react-cookie";
import {openAIToken} from "../util/constanst";
import {MessageInstance} from "antd/es/message/interface";
import {useAppDispatch} from "./storeHooks";
import {setCurrentStreamChat, setLoading} from "../store/reducer/chat";
import useAllStates from "./useAllStates";


export default function useRequest(refreshCount: number, messageApi: MessageInstance) {
    const dispatch = useAppDispatch();
    const [cookies] = useCookies([openAIToken]);
    const {questionList} = useAllStates();
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
        dispatch(setCurrentStreamChat({role: "system", content: []}))
        dispatch(setLoading(true))
        requestStreamAns(questionList, cookies.openAIToken, (text, isFinished) => { // requestAns
                if (text.length > 0) {
                    dispatch(setCurrentStreamChat({
                        role: "system",
                        content: text.split('\n')
                    }))
                }
                isFinished && dispatch(setLoading(false));
            }
        );
    }, [refreshCount])
}