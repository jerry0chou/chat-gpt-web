import dayjs from "dayjs";

export default function (timestamp: number): string{
    if(timestamp){
        return dayjs(timestamp).format('MM-DD HH:mm:ss')
    }
    return ''
}