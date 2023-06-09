import React from "react";
import {Avatar, message} from "antd";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import {tidyContent} from "../../util/tidyContent";
import PlainTextDisplay from "../PlainTextDisplay/PlainTextDisplay";
import useAllStates from "../../hooks/useAllStates";
import {
    CardContainer,
    ChatListContainer,
    ContentContainer,
    ContentOutContainer, CopyContainer, CopyIcon, AddToInputIcon, DateContainer,
    OperationContainer,
    ProfileContainer
} from "./css";
import formatTimestamp from "../../util/formatTimestamp";
import {useAppDispatch} from "../../hooks/storeHooks";
import {setInputString} from "../../store/reducer/input";

export interface Chat {
    role: 'system' | 'user';
    content: string[];
    timestamp: number;
}


export default function ChatList() {
    const [messageApi, contextHolder] = message.useMessage();
    const systemProfileUrl = 'https://api.dicebear.com/6.x/bottts/svg?seed=Miss%20kitty&eyes=bulging&backgroundColor[]';
    const userProfileUrl = 'https://api.dicebear.com/6.x/miniavs/svg?seed=Bubba&flip=true'
    const {fontSize, chatList, theme} = useAllStates()

    const dispatch = useAppDispatch();
    const onCopyClick = (content: string[]) => {
        navigator.clipboard.writeText(content.join('\n')).then(() => {
            messageApi.success('copy content successfully')
        }).catch(() => {
            messageApi.error('copy content failed')
        })
    }
    const onAddToInputClick = (content: string[]) => {
        dispatch(setInputString(content.join('\n')))
    }
    return (
        <ChatListContainer>
            {contextHolder}
            {
                chatList.map((item, index) => {
                    return (
                        <CardContainer key={index} theme={theme}>
                            {
                                item.role === 'system' ? <ProfileContainer role={'system'}>
                                    <Avatar size={40} src={systemProfileUrl}/>
                                </ProfileContainer> : <div/>
                            }
                            <ContentOutContainer role={item.role}>
                                <OperationContainer role={item.role}>
                                    <DateContainer theme={theme}>{formatTimestamp(item.timestamp)}</DateContainer>
                                    <CopyContainer size={16} onClick={() => onCopyClick(item.content)}>
                                        <CopyIcon size={15} theme={theme}/>
                                    </CopyContainer>
                                    <CopyContainer size={16} onClick={()=> onAddToInputClick(item.content)}>
                                        <AddToInputIcon size={15} theme={theme}/>
                                    </CopyContainer>
                                </OperationContainer>
                                <ContentContainer role={item.role} theme={theme}>
                                    {
                                        tidyContent(item.content).map((item, index2) => {
                                            return (
                                                <div key={index2}>
                                                    {item.kind === 'plain' ?
                                                        <PlainTextDisplay content={item.content} fontSize={fontSize}/> :
                                                        <CodeDisplay language={item.language || 'js'}
                                                                     code={item.content} key={index2}/>}
                                                </div>
                                            )
                                        })
                                    }
                                </ContentContainer>
                            </ContentOutContainer>
                            {item.role === 'user' ? <ProfileContainer role={'user'}>
                                <Avatar size={40} src={userProfileUrl}/>
                            </ProfileContainer> : <div/>}
                        </CardContainer>
                    )
                })
            }
        </ChatListContainer>
    )
}