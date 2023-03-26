import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Chat} from "../../components/ChatList/ChatList";

export interface ChatState {
    loading: boolean;
    chatList: Chat[]
}

const initialState: ChatState = {
    loading: false,
    chatList: localStorage.getItem('chatList') ? JSON.parse(localStorage.getItem('chatList') as string) : []
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setChatList: (state, action: PayloadAction<Chat[]>) => {
            state.chatList = action.payload;
            localStorage.setItem('chatList', JSON.stringify(state.chatList));
        }
    }
})

export const {setLoading, setChatList} = chatSlice.actions;
export default chatSlice.reducer;