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
import {ReactComponent as GithubSVG} from "../../assets/github.svg";
import {ReactComponent as RefreshSVG} from "../../assets/refresh.svg";

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
  background-color: #17202a;
`
const headerDayTheme = css`
  background-color: #ffffff;
`
const baseHeaderStyle = css`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(2, 32px) auto repeat(6, 32px);
  grid-auto-rows: 1fr;
  align-items: center;
  grid-template-areas: "fold add title delete fontPlus fontMinus theme token github";
  height: 50px;
  width: 100vw;
  grid-column-gap: 15px;
  z-index: 2;
`
export const HeaderContainer = styled.div<{ theme: Theme }>`
  ${baseHeaderStyle}
  ${({theme}) => theme === Theme.night ? headerNightTheme : headerDayTheme}
  border-bottom: ${p=> p.theme === Theme.day? '#e7e1e1': ''} 1px solid;
`;
export const IconContainer = styled.div<{isClear?: boolean, area: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-image: ${p=> p.isClear? 'linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)': 'linear-gradient(315deg, #045de9 0%, #09c6f9 74%)'};
  width: 32px;
  height: 32px;
  grid-area: ${p=> p.area};
`
export const GithubIcon = styled(GithubSVG)<{size: number}>`
  ${svgStyle};
`
export const GithubIconContainer = styled.div<{size: number, area: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: 50%;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  grid-area: ${p => p.area};

  &:hover {
    cursor: pointer;
  }
`
export const TitleContainer = styled.div<{theme: Theme}>`
    grid-area: title;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Noto Sans TC', sans-serif;
    color: ${p=> p.theme === Theme.day? '#000000': '#faf8f8'};
`
export const RefreshIcon = styled(RefreshSVG)<{ theme: Theme }>`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  & path {
    fill: ${p => p.theme === Theme.day ? '#343636' : '#faf8f8'};
  }
  &:hover {
    cursor: pointer;
  }
`;