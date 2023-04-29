import {useAppDispatch} from "./storeHooks";
import useAllStates from "./useAllStates";
import {useEffect} from "react";
import {requestAns} from "../api/config";
import {useCookies} from "react-cookie";
import {openAIToken} from "../util/constanst";
import {ChatCompletionRequestMessage} from "openai";
import {updateTitle} from "../store/reducer/menu";

export default function useTitleRequest(refreshCount: number) {
    const dispatch = useAppDispatch();
    const {questionList, currentTabKey} = useAllStates();
    const [cookies] = useCookies([openAIToken]);

    const concatQuestionList = questionList.map(question => question.content).join('\n')

    const template = `please write a title within 10 words in total for a list of subsequent questions: ${concatQuestionList}`
    const questions: ChatCompletionRequestMessage[] = [{role: 'user', content: template}]
    useEffect(() => {
        if (refreshCount === 0) return;
        requestAns(questions, cookies.openAIToken).then(res => {
            const title = res?.data?.choices?.[0]?.message?.content || ''
            dispatch(updateTitle({key: currentTabKey, title}))
        })
    }, [refreshCount])
}