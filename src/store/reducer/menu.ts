import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currentTabKey, menuList, foldMenuValue} from "../../util/constanst";

export interface MenuItem {
    key: string;
    label: string;
    icon?: any
}

export interface MenuState {
    menuList: MenuItem[],
    currentTabKey: string,
    isInit: boolean,
    foldMenu: boolean,
}

const key = localStorage.getItem(currentTabKey) || '0'
const initialState: MenuState = {
    menuList: localStorage.getItem(menuList) ? JSON.parse(localStorage.getItem(menuList) as string) : [],
    currentTabKey: key,
    isInit: key !== "0",
    foldMenu: localStorage.getItem(foldMenuValue) === 'true'
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuList: (state, action) => {
            state.menuList = action.payload
            localStorage.setItem(menuList, JSON.stringify(state.menuList));
        },
        setCurrentTabKey: (state, action) => {
            state.currentTabKey = action.payload
            localStorage.setItem(currentTabKey, state.currentTabKey)
        },
        deleteTab: (state, action: PayloadAction<string>) => {
            const key = action.payload
            const index = state.menuList.findIndex(item => item.key === key)
            state.menuList.splice(index, 1)
            localStorage.setItem(menuList, JSON.stringify(state.menuList));
            localStorage.removeItem(key)
        },
        init: (state) => {
            state.isInit = true
        },
        foldMenuAction: (state, action: PayloadAction<boolean>) => {
            state.foldMenu = action.payload
            localStorage.setItem(foldMenuValue, state.foldMenu.toString())
        }
    }
})

export const {setMenuList, setCurrentTabKey, deleteTab, init, foldMenuAction} = menuSlice.actions
export default menuSlice.reducer