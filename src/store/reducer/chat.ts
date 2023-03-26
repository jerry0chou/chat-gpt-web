import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ChatState {
    loading: boolean;
}

const initialState: ChatState = {
    loading: false,
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
})

export const {setLoading} = chatSlice.actions;
export default chatSlice.reducer;