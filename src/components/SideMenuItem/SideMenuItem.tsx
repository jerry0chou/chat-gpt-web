import React, {memo} from "react";
import './index.css'
import {OperateIcon} from "./css";
import cs from "classnames";

interface ItemProp{
    id: string;
    isActive: boolean;
    emitItemClick: (id: string)=>void;
}
function SideMenuItem(p: ItemProp){
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
        <div className={cs({'item-container': true, 'active-item-container': p.isActive})}onClick={onMenuItemClick}>
            <span className="item-font-style">New Chatdfgffghfghfghfghdfgdfgdfhfg df梵蒂冈好风光好风光</span>
            {
                p.isActive? <OperateIcon onClick={onOperateClick}/>: <div/>
            }
        </div>
    )
}
export default memo(SideMenuItem);