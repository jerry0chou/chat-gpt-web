
interface ChatContent{
    kind: 'plain' | 'blockCode'
    content: string
}
export function tidyContent(chats: string[]): ChatContent[]{
    const array: ChatContent[] = [];
    let codeString = ''
    let codeFlagCount = 0
    for (const chat of chats) {
        if(chat.indexOf('```')>= 0){
            codeFlagCount+=1
            if(codeFlagCount %2===0){
                array.push({
                    kind: "blockCode",
                    content: codeString
                })
                codeString = ''
            }
        } else if(codeFlagCount %2 !== 0){
            codeString += chat+'\n'
        }
        else{
            if(chat.length> 0){
                array.push({
                    kind: "plain",
                    content: chat
                })
            }
        }
    }
    return array
}