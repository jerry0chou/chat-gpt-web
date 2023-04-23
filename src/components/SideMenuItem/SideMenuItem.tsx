import React, {memo} from "react";
import {
    ItemContainer,
    ItemText,
    DeleteIcon,
    DateContainer,
    ItemUpperContainer,
    ItemLowerContainer,
    CreateTimeIcon, EditTimeIcon
} from "./css";
import useAllStates from "../../hooks/useAllStates";
import {setCurrentTabKey, setMenuList} from "../../store/reducer/menu";
import {useAppDispatch} from "../../hooks/storeHooks";
import formatTimestamp from "../../util/formatTimestamp";
interface ItemProp {
    id: string;
    text: string;
    isActive: boolean;
    editTime: string;
}

function SideMenuItem(p: ItemProp) {
    const {theme, menuList, currentTabKey} = useAllStates()
    const dispatch = useAppDispatch();
    console.log('render SideMenuItem'   + p.id)
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
            <ItemUpperContainer>
                <ItemText theme={theme}>{p.text}</ItemText>
                {
                    p.isActive ? <DeleteIcon onClick={onDeleteClick} theme={theme} size={20}/> : <div/>
                }
            </ItemUpperContainer>
            <ItemLowerContainer>
                <DateContainer theme={theme}>
                    <CreateTimeIcon theme={theme} size={13}/>
                    {formatTimestamp(Number(p.id))}
                </DateContainer>
                <DateContainer theme={theme}>
                    {p.editTime && <EditTimeIcon theme={theme} size={13}/>}
                    {formatTimestamp(Number(p.editTime))}
                </DateContainer>
            </ItemLowerContainer>

        </ItemContainer>
    )
}

export default memo(SideMenuItem);