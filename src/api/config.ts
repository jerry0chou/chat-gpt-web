
import {
    ChatCompletionRequestMessage,
    Configuration,
    CreateChatCompletionResponse,
    OpenAIApi
} from 'openai'
import {AxiosResponse} from "axios";
const configuration = new Configuration({
    apiKey: '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',
});


const openai = new OpenAIApi(configuration);


export const requestAns = async (array: ChatCompletionRequestMessage[]): Promise<AxiosResponse<CreateChatCompletionResponse>> => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages:  array
    });
    // @ts-ignore
    return  Promise.resolve(response)
}


