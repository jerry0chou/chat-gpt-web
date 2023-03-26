import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface MenuItem{
    key: string;
    label: string;
    icon?: any
}
export interface MenuState{
    menuList: MenuItem[]
}
const initialState: MenuState = {
    menuList: localStorage.getItem('menuList') ? JSON.parse(localStorage.getItem('menuList') as string) : []
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuList: (state, action)=>{
            state.menuList = action.payload
            localStorage.setItem('menuList', JSON.stringify(state.menuList));
        }
    }
})

export const {setMenuList} = menuSlice.actions
export default menuSlice.reducer