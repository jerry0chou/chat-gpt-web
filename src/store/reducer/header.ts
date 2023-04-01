import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fontSizeValue, themeValue} from "../../util/constanst";

export enum Theme {
    night = 'night',
    day = 'day'
}
export interface HeaderState{
    fontSize: number,
    theme: Theme
}
const initialState: HeaderState = {
    fontSize: Number(localStorage.getItem(fontSizeValue)) || 18,
    theme: localStorage.getItem(themeValue) as Theme || Theme.day
}
export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setFontSize: (state, action: PayloadAction<number>) => {
            state.fontSize += action.payload
            localStorage.setItem(fontSizeValue, String(state.fontSize))
        },
        setTheme: (state, action: PayloadAction<Theme>) =>{
            state.theme = action.payload
            localStorage.setItem(themeValue, state.theme)
        }
    }
})
export const {setFontSize, setTheme} = headerSlice.actions
export default headerSlice.reducer
