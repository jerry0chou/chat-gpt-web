import {useAppSelector} from "./storeHooks";
import {ChatCompletionRequestMessage} from "openai";

export default function useAllStates(){
    const fontSize = useAppSelector(state => state.header.fontSize);
    const theme = useAppSelector(state => state.header.theme);
    const loading = useAppSelector(state => state.chat.loading);
    const chatList = useAppSelector(state => state.chat.chatList);
    const questionList: ChatCompletionRequestMessage[]= []
    for (const chat of chatList) {
        if(chat.role === 'user'){
            questionList.push({ role: 'user', content: chat.content.join('\n')})
        }
    }
    return {fontSize, theme, loading, chatList, questionList};
}