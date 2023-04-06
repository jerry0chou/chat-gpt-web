import React from "react";

import {ReactComponent as OperateSVG} from "../../assets/operate.svg";
import styled, {css} from "styled-components";


const svgStyle = () => {
    return css`
      margin-right: 2px;
      width: 30px;
      height: 30px;

      & path {
        fill: #d1d8dc;
      }

      &:hover {
        cursor: pointer;
      }
    `
}
export const OperateIcon = styled(OperateSVG)`
  ${svgStyle}
`