import React, {memo} from "react";
import {AddIcon, ItemContainer, ItemText, OperateIcon} from "./css";
import useAllStates from "../../hooks/useAllStates";
export enum ItemType{
    Normal = 'Normal',
    Add = 'Add'
}
interface ItemProp{
    id: string;
    type?: ItemType;
    text: string;
    isActive: boolean;
    emitItemClick: (id: string)=>void;
}
function SideMenuItem(p: ItemProp){
    const {theme} = useAllStates()
    const onMenuItemClick = ()=>{
        console.log('onMenuItemClick')
        p.emitItemClick(p.id)
    }
    // @ts-ignore
    const onOperateClick = (e)=>{
        e.stopPropagation()
        console.log('onOperateClick')
    }

    return(
        <ItemContainer onClick={onMenuItemClick} theme={theme} isActive={p.isActive} type={p.type}>
            {p.type === ItemType.Add? <AddIcon theme={theme}/>: <div/>}
            <ItemText theme={theme} >{p.text}</ItemText>
            {
                p.isActive? <OperateIcon onClick={onOperateClick} theme={theme}/>: <div/>
            }
        </ItemContainer>
    )
}
export default memo(SideMenuItem);