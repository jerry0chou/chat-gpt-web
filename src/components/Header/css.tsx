import React from "react";
import styled, {css} from "styled-components";
import {ReactComponent as DaySVG} from "../../assets/day.svg";
import {ReactComponent as NightSVG} from "../../assets/night.svg";
import {ReactComponent as TokenSVG} from "../../assets/token.svg";
import {ReactComponent as FontMinusSVG} from "../../assets/fontMinus.svg";
import {ReactComponent as FontPlusSVG} from "../../assets/fontPlus.svg";
import {ReactComponent as TrashSVG } from "../../assets/trash.svg";
import {ReactComponent as FoldSVG } from "../../assets/fold.svg";
import {ReactComponent as AddSVG} from "../../assets/add.svg";
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

export const TrashIcon = styled(TrashSVG)`${svgStyle}`

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

interface FoldIconProps extends IconProps {
    isfold: string;
}
export const FoldIcon = styled(FoldSVG)<FoldIconProps>`
  ${svgStyle};
  transform: rotate(${p=> p.isfold === 'true'? '-90': '90'}deg);
`

const headerNightTheme = css`
  background-color: #181622;
`
const headerDayTheme = css`
  background-color: #ffffff;
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
export const IconContainer = styled.div<{isClear?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-image: ${p=> p.isClear? 'linear-gradient(315deg, #ffac81 0%, #ff928b 74%)': 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)'};
  width: 32px;
  height: 32px;
`

