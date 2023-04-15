import React from "react";
import {apiModelName} from "../../util/constanst";
import {PositionTag, Tag, TagText} from "./css";
import useAllStates from "../../hooks/useAllStates";

function TagContainer() {
    const {theme} = useAllStates()
    return (
        <PositionTag theme={theme}>
            <Tag start={'#fbb034'} end={'#ffdd00'}><TagText color={'#645928'}>Copyright@Jerry</TagText></Tag>
            <Tag start={'#63a4ff'} end={'#83eaf1'}><TagText color={'#1e4656'}>{apiModelName}</TagText></Tag>
        </PositionTag>
    )
}

export default TagContainer;