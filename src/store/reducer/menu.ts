import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currentTabKey, menuList, foldMenuValue} from "../../util/constanst";

export interface MenuItem {
    key: string;
    title: string;
    editTime: string;
}

export interface MenuState {
    menuList: MenuItem[],
    currentTabKey: string,
    currentTitle: string,
    foldMenu: boolean,
}

const key = localStorage.getItem(currentTabKey) || '0'
const initialState: MenuState = {
    menuList: localStorage.getItem(menuList) ? JSON.parse(localStorage.getItem(menuList) as string) : [],
    currentTabKey: key,
    currentTitle: '',
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
            // setTitle
            const index = state.menuList.findIndex(item => item.key === state.currentTabKey)
            state.currentTitle = state.menuList[index].title
        },
        deleteTab: (state, action: PayloadAction<string>) => {
            const key = action.payload
            const index = state.menuList.findIndex(item => item.key === key)
            state.menuList.splice(index, 1)
            localStorage.setItem(menuList, JSON.stringify(state.menuList));
            console.log('deleteTab', key, state.currentTabKey)
            localStorage.removeItem(key)
        },
        foldMenuAction: (state, action: PayloadAction<boolean>) => {
            state.foldMenu = action.payload
            localStorage.setItem(foldMenuValue, state.foldMenu.toString())
        },
        addNewChat: (state) => {
            const newItem: MenuItem = {
                title: `New Chat` + (state.menuList.length+1),
                key: String(new Date().getTime()),
                editTime: ''
            }
            state.menuList.push(newItem)
            state.currentTabKey = newItem.key
            localStorage.setItem(menuList, JSON.stringify(state.menuList));
            localStorage.setItem(currentTabKey, state.currentTabKey)
        },
        updateEditTime: (state, action: PayloadAction<string>) => {
            const key = action.payload
            const index = state.menuList.findIndex(item => item.key === key)
            state.menuList[index].editTime = String(new Date().getTime())
            localStorage.setItem(menuList, JSON.stringify(state.menuList));
        },
        updateTitle: (state, action: PayloadAction<{ key: string, title: string }>) => {
            const {key, title} = action.payload
            const index = state.menuList.findIndex(item => item.key === key)
            state.menuList[index].title = title
            state.currentTitle = title
            localStorage.setItem(menuList, JSON.stringify(state.menuList));
        }
    }
})

export const {setMenuList,
    setCurrentTabKey,
    deleteTab,
    foldMenuAction,
    addNewChat,
    updateEditTime,
    updateTitle} = menuSlice.actions
export default menuSlice.reducer