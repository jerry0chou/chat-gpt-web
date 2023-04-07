import React from "react";

import {ReactComponent as OperateSVG} from "../../assets/operate.svg";
import styled, {css} from "styled-components";
import {Theme} from "../../store/reducer/header";

export const OperateIcon = styled(OperateSVG)<{theme: Theme}>`
  margin-right: 2px;
  margin-left: auto;
  width: 20px;
  height: 20px;
  & path {
    fill: ${p => p.theme === Theme.day ? '#42494d' : '#d1d8dc'};
  }

  &:hover {
    cursor: pointer;
  }
`

export const ItemContainer = styled.div<{ theme: Theme }>`
  display: flex;
  margin-top: 2px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-left: 3px;
  margin-right: 3px;
  background-color: ${p => p.theme === Theme.day ? '#dfe2e3' : '#3875f7'};
  border-radius: 10px;
`;

export const ItemText = styled.div<{ theme: Theme }>`
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 溢出隐藏 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  color: ${p => p.theme === Theme.day ? '#1e1e1e' : '#ffffff'};
  font-family: sans-serif;
  font-size: 10px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 5px;
`;