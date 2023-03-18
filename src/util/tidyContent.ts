
interface ChatContent{
    kind: 'plain' | 'blockCode'
    content: string
}

const a = ['', '', 'Here is an example implementation of the quicksort algorithm in Python:',
    '', '```', 'def quicksort(arr):', '    if len(arr) <= 1:', '        return arr', '    pivot = arr[len(arr) // 2]',
    '    left = [x for x in arr if x < pivot]', '    middle = [x for x in arr if x == pivot]',
    '    right = [x for x in arr if x > pivot]',
    '    return quicksort(left) + middle + quicksort(right)',
    '```', '',
    'To sort an array `my_arr`, simply call: ',
    '', '```',
    'sorted_arr = quicksort(my_arr)',
    '```', '',
    'This implementation takes an array and recursively…il the entire array is sorted in ascending order.']
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

    console.log('tidyContent array', array)
    return array
}