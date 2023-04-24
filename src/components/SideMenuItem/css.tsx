import React from "react";

import {ReactComponent as DeleteSVG} from "../../assets/delete.svg";
import styled, {css} from "styled-components";
import {Theme} from "../../store/reducer/header";
import {ReactComponent as CreateTimeSVG} from "../../assets/createTime.svg";
import {ReactComponent as EditTimeSVG} from "../../assets/editTime.svg";

interface IconProps {
    size: number;
    theme: Theme;
}

const baseIconStyle = css<IconProps>`
  width: ${p => p.size}px;
  height: 20px;

  & path {
    fill: ${p => p.theme === Theme.day ? '#8f9c9f' : '#e0e6ea'};
  }

  &:hover {
    cursor: pointer;
  }
`
export const DeleteIcon = styled(DeleteSVG)<IconProps>`
  margin-right: 2px;
  margin-left: auto;
  ${baseIconStyle};
`
export const CreateTimeIcon = styled(CreateTimeSVG)<IconProps>`
  ${baseIconStyle};
  margin-right: 2px;
`
export const EditTimeIcon = styled(EditTimeSVG)<IconProps>`
  ${baseIconStyle};
  margin-right: 3px;
`

interface ItemProp {
    theme: Theme;
    isActive?: boolean;
}

export const ItemContainer = styled.div<ItemProp>`
  display: flex;
  margin-top: 5px;
  height: 60px;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  border: ${p =>
          p.isActive ?
                  p.theme === Theme.day ? '#3875f7' : '#ffffff' :
                  p.theme === Theme.day ? '#e7e1e1' : '#42494d'
  } 2px solid;
  background-color: ${p => p.theme === Theme.day ? '#ffffff' :
          p.isActive ? '#3875f7' : '#244aa8'
  };
  border-radius: 10px;
`;

export const ItemText = styled.div<ItemProp>`
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 溢出隐藏 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  color: ${p => p.theme === Theme.day ? '#1e1e1e' : '#ffffff'};
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 5px;
`;
export const ItemUpperContainer = styled.div<ItemProp>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const ItemLowerContainer = styled.div<ItemProp>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const DateContainer = styled.div<ItemProp>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 11px;
  font-weight: 500;
  font-family: sans-serif;
  color: ${p => p.theme === Theme.day ? '#767f80' : '#c6cdd5'};
`

export const EmptyItem = styled.div`
  width: 270px;
  height: 80px;
`