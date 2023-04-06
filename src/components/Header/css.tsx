import React from "react";
import styled, {css} from "styled-components";
import {ReactComponent as DaySVG} from "../../assets/day.svg";
import {ReactComponent as NightSVG} from "../../assets/night.svg";
import {ReactComponent as TokenSVG} from "../../assets/token.svg";
import {ReactComponent as FontMinusSVG} from "../../assets/fontMinus.svg";
import {ReactComponent as FontPlusSVG} from "../../assets/fontPlus.svg";
import {Theme} from "../../store/reducer/header";
interface IconProps {
    size: number;
    theme: Theme;
}

const svgStyle = (p: IconProps) => {
    return css`
      width: ${p.size}px;
      height: ${p.size}px;

      & path {
        fill: #ebecf1;
      }

      &:hover {
        cursor: pointer;
      }
    `
}
export const DayIcon = styled(DaySVG)`
  ${svgStyle}
`
export const NightIcon = styled(NightSVG)`${svgStyle}`
export const TokenIcon = styled(TokenSVG)`${svgStyle}`
export const FontMinusIcon = styled(FontMinusSVG)`${svgStyle}`
export const FontPlusIcon = styled(FontPlusSVG)`${svgStyle}`

const headerNightTheme = css`
  background-color: #181622;
  //background-image: linear-gradient(to right top, #000000, #0d0b0c, #161415, #1c1a1d, #212125, #212125, #212125, #212125, #1c1a1d, #161415, #0d0b0c, #000000);
`
const headerDayTheme = css`
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);  
`
const baseHeaderStyle = css`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  height: 50px;
  width: 100%;
  align-items: center;
  gap: 12px;
  z-index: 2;
`
export const HeaderContainer = styled.div<{ theme: Theme }>`
  ${baseHeaderStyle}
  ${({theme}) => theme === Theme.night ? headerNightTheme : headerDayTheme}
  border-bottom: ${p=> p.theme === Theme.day? '#e7e1e1': ''} 1px solid;
`;


