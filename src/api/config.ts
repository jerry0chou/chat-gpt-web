import {
    ChatCompletionRequestMessage,
    Configuration,
    CreateChatCompletionResponse,
    OpenAIApi
} from 'openai'
import axios, {Axios, AxiosResponse} from "axios";
import {apiModelName} from "../util/constanst";

export const requestAns = async (array: ChatCompletionRequestMessage[], token: string): Promise<AxiosResponse<CreateChatCompletionResponse>> => {
    const configuration = new Configuration({
        apiKey: token,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
        model: apiModelName,
        messages: array
    });
    // @ts-ignore
    return Promise.resolve(response)
}

// axios stream request example CODE

export const requestStreamAns = async (array: ChatCompletionRequestMessage[], token: string, callback: (text: string, isFinished: boolean) => void) => {
    const axiosInstance = axios.create({
        baseURL: 'https://api.openai.com/v1',
        onDownloadProgress: ({event}) => {
            try {
                const text = event.target.responseText.trim() as string
                const s = text.split('data: ').filter(_ => _ !== '')
                    .map(s => {
                        if (!s.includes('[DONE]'))
                            return JSON.parse(s).choices[0].delta.content || ''
                        return ''
                    }).join('')
                const isFinished = text.includes('[DONE]')
                callback(s, isFinished)
            } catch (e) {
                console.error(e)
            }
        },
        headers: {
            authorization: `Bearer ${token}`,
            accept: '*/*',
        },
    })
    await axiosInstance.post('/chat/completions', {
        model: apiModelName,
        messages: array,
        stream: true,
    })

}



