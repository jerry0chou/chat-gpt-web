
import {
    ChatCompletionRequestMessage,
    Configuration,
    CreateChatCompletionResponse,
    OpenAIApi
} from 'openai'
import {AxiosResponse} from "axios";
import {apiModelName} from "../util/constanst";

export const requestAns = async (array: ChatCompletionRequestMessage[], token: string): Promise<AxiosResponse<CreateChatCompletionResponse>> => {
    const configuration = new Configuration({
        apiKey: token,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
        model: apiModelName,
        messages:  array
    });
    // @ts-ignore
    return  Promise.resolve(response)
}


