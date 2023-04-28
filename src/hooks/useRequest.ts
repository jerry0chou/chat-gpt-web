import { requestStreamAns} from "../api/config";
import {useEffect} from "react";
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
        dispatch(setCurrentStreamChat({role: "system", content: [], timestamp: new Date().getTime()}))
        dispatch(setLoading(true))
        requestStreamAns(questionList, cookies.openAIToken, (text, isFinished) => { // requestAns
                if (text.length > 0) {
                    dispatch(setCurrentStreamChat({
                        role: "system",
                        content: text.split('\n'),
                        timestamp: new Date().getTime()
                    }))
                }
                isFinished && dispatch(setLoading(false));
            }
        );
    }, [refreshCount])
}