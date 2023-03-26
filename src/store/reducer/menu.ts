import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currentTabKey, menuList} from "../../util/constanst";
export interface MenuItem{
    key: string;
    label: string;
    icon?: any
}
export interface MenuState{
    menuList: MenuItem[],
    currentTabKey: string,
}
const initialState: MenuState = {
    menuList: localStorage.getItem(menuList) ? JSON.parse(localStorage.getItem(menuList) as string) : [],
    currentTabKey: localStorage.getItem(currentTabKey) || '',
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuList: (state, action)=>{
            state.menuList = action.payload
            localStorage.setItem(menuList, JSON.stringify(state.menuList));
        },
        setCurrentTabKey: (state , action) => {
            state.currentTabKey = action.payload
            localStorage.setItem(currentTabKey, state.currentTabKey)
        }
    }
})

export const {setMenuList, setCurrentTabKey} = menuSlice.actions
export default menuSlice.reducer