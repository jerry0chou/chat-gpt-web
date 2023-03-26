import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Theme = 'night'|'day'
export interface HeaderState{
    fontSize: number,
    theme: Theme
}
const initialState: HeaderState = {
    fontSize: 18,
    theme: 'day'
}
export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setFontSize: (state, action: PayloadAction<number>) => {
            state.fontSize += action.payload
        },
        setTheme: (state, action: PayloadAction<Theme>) =>{
            state.theme = action.payload
        }
    }
})
export const {setFontSize, setTheme} = headerSlice.actions
export default headerSlice.reducer
