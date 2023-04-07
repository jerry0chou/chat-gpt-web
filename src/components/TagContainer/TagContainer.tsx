import React from "react";
import {Tag} from "antd";
import {apiModelName} from "../../util/constanst";
import {PositionTag} from "./css";
import useAllStates from "../../hooks/useAllStates";

function TagContainer(){
    const {theme} = useAllStates()
    return(
        <PositionTag theme={theme}>
            <Tag color={'#2db7f5'}>Copyright@Jerry</Tag>
            <Tag color={'#2db7f5'}>{apiModelName}</Tag>
        </PositionTag>
    )
}

export default TagContainer;