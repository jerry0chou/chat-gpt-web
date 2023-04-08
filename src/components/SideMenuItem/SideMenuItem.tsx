import React, {memo} from "react";
import {ItemContainer, ItemText, DeleteIcon} from "./css";
import useAllStates from "../../hooks/useAllStates";
import {setCurrentTabKey, setMenuList} from "../../store/reducer/menu";
import {useAppDispatch} from "../../hooks/storeHooks";

export enum ItemType {
    Normal = 'Normal',
    Add = 'Add'
}

interface ItemProp {
    id: string;
    text: string;
    isActive: boolean;
}

function SideMenuItem(p: ItemProp) {
    const {theme, menuList} = useAllStates()
    const dispatch = useAppDispatch();

    const onMenuItemClick = () => {
        dispatch(setCurrentTabKey(p.id))
    }
    // @ts-ignore
    const onDeleteClick = (e) => {
        e.stopPropagation()
        const index = menuList.findIndex(item => item.key === p.id)
        const newMenuList = [...menuList]
        newMenuList.splice(index, 1)
        dispatch(setMenuList(newMenuList))
        if(index+1 < menuList.length){
            dispatch(setCurrentTabKey(menuList[index+1].key));
        }else if(index === menuList.length-1 && index !== 0){
            dispatch(setCurrentTabKey(menuList[index-1].key));
        }
    }
    return (
        <ItemContainer onClick={onMenuItemClick} theme={theme} isActive={p.isActive}>
            <ItemText theme={theme}>{p.text}</ItemText>
            {
                p.isActive ? <DeleteIcon onClick={onDeleteClick} theme={theme}/> : <div/>
            }
        </ItemContainer>
    )
}

export default memo(SideMenuItem);