import React, {memo} from "react";
import {ItemContainer, ItemText, OperateIcon} from "./css";
import useAllStates from "../../hooks/useAllStates";

interface ItemProp{
    id: string;
    type?: 'normal' | 'add'
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
        <ItemContainer onClick={onMenuItemClick} theme={theme}>
            <ItemText theme={theme}>{p.text}</ItemText>
            {
                p.isActive? <OperateIcon onClick={onOperateClick} theme={theme}/>: <div/>
            }
        </ItemContainer>
    )
}
export default memo(SideMenuItem);