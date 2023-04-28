import {useAppSelector} from "./storeHooks";
import {ChatCompletionRequestMessage} from "openai";

export default function useAllStates(){
    const fontSize = useAppSelector(state => state.header.fontSize);
    const theme = useAppSelector(state => state.header.theme);
    const loading = useAppSelector(state => state.chat.loading);
    const chatList = useAppSelector(state => state.chat.chatList);
    const questionList: ChatCompletionRequestMessage[]= []
    const currentStreamChat = useAppSelector(state => state.chat.currentStreamChat);
    for (const chat of chatList) {
        if(chat.role === 'user'){
            questionList.push({ role: 'user', content: chat.content.join('\n')})
        }
    }
    const inputString = useAppSelector(state => state.input.inputString);
    const menuList = useAppSelector(state => state.menu.menuList)
    const currentTabKey = useAppSelector(state => state.menu.currentTabKey)
    const currentTitle = useAppSelector(state => state.menu.currentTitle)
    const foldMenu = useAppSelector(state => state.menu.foldMenu)
    return {fontSize, theme, loading, chatList, questionList, menuList, currentTabKey, currentStreamChat, foldMenu, inputString, currentTitle};
}