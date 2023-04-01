import React from "react";
import styled, {css} from "styled-components";
import {ReactComponent as DaySVG} from "../../assets/day.svg";
import {ReactComponent as NightSVG} from "../../assets/night.svg";
import {ReactComponent as TokenSVG} from "../../assets/token.svg";
import {ReactComponent as FontMinusSVG} from "../../assets/fontMinus.svg";
import {ReactComponent as FontPlusSVG} from "../../assets/fontPlus.svg";
interface IconProps {
    size: number;
    color: string;
}

const svgStyle = (p: IconProps) => {
    return css`
      width: ${p.size}px;
      height: ${p.size}px;

      & path {
        fill: ${p.color};
      }

      &:hover {
        cursor: pointer;
        background: #e7e4e4;
        border-radius: 50%;
      }
    `
}
export const DayIcon = styled(DaySVG)`
    ${svgStyle}
`
export const NightIcon = styled(NightSVG)`
    ${svgStyle}
`
export const TokenIcon = styled(TokenSVG)`
    ${svgStyle}
`
export const FontMinusIcon = styled(FontMinusSVG)`
    ${svgStyle}
`
export const FontPlusIcon = styled(FontPlusSVG)`
  ${svgStyle}
`

