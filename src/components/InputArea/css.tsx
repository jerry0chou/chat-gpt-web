import React from "react";
import styled from "styled-components";
import {Theme} from "../../store/reducer/header";
import {ReactComponent as SendSVG} from "../../assets/send.svg";
import {ReactComponent as ClearSVG} from "../../assets/clear.svg";

export const SendIcon = styled(SendSVG)`
  width: 22px;
  height: 22px;
  margin-left: 3px;
  & path {
    fill: #faf8f8
  }
  &:hover {
    cursor: pointer;
  }
`
export const ClearIcon = styled(ClearSVG)`
  width: 22px;
  height: 22px;
  margin-right: 2px;
  & path {
    fill: #faf8f8
  }
  &:hover {
    cursor: pointer;
  }
`

export const InputContainer = styled.div<{ theme: Theme }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 65px;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme === Theme.day ? '#ffffff' : '#181622'};
`
export const RoundButton = styled.button<{ direction: 'left' |'right' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${p => p.direction === 'left' ? 'left' : 'right'}: 3px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${p=> p.direction === 'left' ? '#f44336': '#3875f6'};
  color: #fff;
  font-size: 1.2rem;
  line-height: 30px;
  text-align: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

export const Input = styled.input<{ theme: Theme }>`
  width: 100%;
  height: 70%;
  border: 1px solid ${p => p.theme === Theme.day ? '#c2c8d0' : '#10417a'};
  background: ${p => p.theme === Theme.day ? '#ffffff' : '#1e2a38'};
  border-radius: 50px;
  color: ${p => p.theme === Theme.day ? '#62646e' : '#ffffff'};;
  outline: none;
  font-size: 20px;
  padding: 0 50px;

  &:focus {
    border: 1px solid #3875f6;
  }
`
export const PositionInputArea = styled.div<{ foldMenu: boolean }>`
  width: ${p => p.foldMenu ? '100vw' : 'calc(100vw - 256px)'};
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
`
