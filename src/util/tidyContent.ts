
interface ChatContent{
    kind: 'plain' | 'blockCode'
    content: string
    language?: string
}
export function tidyContent(chats: string[]): ChatContent[]{
    const array: ChatContent[] = [];
    let codeString = ''
    let codeFlagCount = 0
    let language = ''
    for (const chat of chats) {
        if(chat.indexOf('```')>= 0){
            codeFlagCount+=1
            if(codeFlagCount %2===1){
                language = chat.replace('```','')
            }
            if(codeFlagCount %2===0){
                array.push({
                    kind: "blockCode",
                    content: codeString,
                    language
                })
                language = ''
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
    if(codeFlagCount %2 !== 0){
        array.push({
            kind: "blockCode",
            content: codeString,
            language
        })
    }
    return array
}