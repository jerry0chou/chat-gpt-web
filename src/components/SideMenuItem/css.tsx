import React from "react";

import {ReactComponent as OperateSVG} from "../../assets/operate.svg";
import {ReactComponent as AddSVG} from "../../assets/add.svg";
import styled from "styled-components";
import {Theme} from "../../store/reducer/header";
import {ItemType} from "./SideMenuItem";

export const OperateIcon = styled(OperateSVG)<{ theme: Theme }>`
  margin-right: 2px;
  margin-left: auto;
  width: 17px;
  height: 17px;

  & path {
    fill: ${p => p.theme === Theme.day ? '#8f9c9f' : '#e0e6ea'};
  }

  &:hover {
    cursor: pointer;
  }
`
export const AddIcon = styled(AddSVG)<{ theme: Theme }>`
  width: 20px;
  height: 20px;
  & path {
    fill: ${p => p.theme === Theme.day ? '#343636' : '#faf8f8'};
  }
  &:hover {
    cursor: pointer;
  }
`
interface ItemProp {
    theme: Theme;
    isActive?: boolean;
    type?: ItemType
}

export const ItemContainer = styled.div<ItemProp>`
  display: flex;
  margin-top: 5px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: ${p => p.type === ItemType.Add ? 'center' : 'flex-start'};
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  border: ${p => 
    p.isActive ? 
    p.theme === Theme.day ? '#3875f7' : '#ffffff' : 
    p.theme === Theme.day ? '#e7e1e1' : '#42494d'
  } 2px solid;
  background-color: ${p => p.theme === Theme.day ? '#ffffff' : '#3875f7'};
  border-radius: 10px;
`;

export const ItemText = styled.div<ItemProp>`
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 溢出隐藏 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  color: ${p => p.theme === Theme.day ? '#1e1e1e' : '#ffffff'};
  font-family: sans-serif;
  font-size: 11px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 5px;
`;