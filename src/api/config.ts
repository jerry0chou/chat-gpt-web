
import {
    ChatCompletionRequestMessage,
    Configuration,
    CreateChatCompletionResponse,
    OpenAIApi
} from 'openai'
import {AxiosResponse} from "axios";

export const requestAns = async (array: ChatCompletionRequestMessage[], token: string): Promise<AxiosResponse<CreateChatCompletionResponse>> => {
    const configuration = new Configuration({
        apiKey: token,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages:  array
    });
    // @ts-ignore
    return  Promise.resolve(response)
}


