import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface InputState{
    inputString: string
}

const initialState: InputState = {
    inputString: ''
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputString: (state, action: PayloadAction<string>) => {
            state.inputString = action.payload
        }
    }
}
)

export const {setInputString} = inputSlice.actions
export default inputSlice.reducer