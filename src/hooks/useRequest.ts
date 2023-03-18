import {requestAns} from "../api/config";
import {useEffect, useState} from "react";
import {ChatCompletionRequestMessage} from "openai";
import {Chat} from "../components/ChatList/ChatList";

interface Response{
    loading: boolean;
    systemReply: Chat
}
export default function useRequest(messages: ChatCompletionRequestMessage[], refreshCount: number): Response {
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState<Chat>({content: [], role: "system"})
    useEffect(()=>{
        if(messages.length === 0 || refreshCount === 0) return;
        setLoading(true)
        requestAns(messages).then((res) => {
            console.log(res)
            let msg: string[] = []
            res.data.choices.forEach(item=>{
                const array = item?.message?.content?.split('\n') || []
                console.log('array', array)
                for (const m of array){
                    if(m.length> 0){
                        msg.push(m)
                    }
                }
            })
            setChat({
                role: "system",
                content: msg
            })
            setLoading(false)
        }).catch(err=>{
            setLoading(false)
        })
    }, [messages, refreshCount])

    return {loading,systemReply: chat}

}