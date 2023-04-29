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

export const InputContainer = styled.div<{ theme: Theme, height: number }>`
  position: relative;
  display: flex;
  width: 100%;
  height: ${p=>p.height}px;
  padding-left: 5px;
  padding-right: 5px;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme === Theme.day ? '#ffffff' : '#181622'};
`
export const RoundButton = styled.button<{ direction: 'left' |'right' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${p => p.direction === 'left' ? 'left' : 'right'}: 9px;
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

export const TextArea = styled.textarea<{ theme: Theme, height: number }>`
  width: 100%;
  height: ${p => p.height}px;
  border: 1px solid ${p => p.theme === Theme.day ? '#c2c8d0' : '#10417a'};
  background: ${p => p.theme === Theme.day ? '#ffffff' : '#1e2a38'};
  border-radius: 50px;
  color: ${p => p.theme === Theme.day ? '#62646e' : '#ffffff'};;
  outline: none;
  font-size: 18px;
  padding: 5px 50px;
  resize: none;


  /* hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  
  &:focus {
    border: 1px solid #3875f6;
  }
`
export const PositionInputArea = styled.div<{ foldMenu: boolean }>`
  width: ${p => p.foldMenu ? '100vw' : 'calc(100vw - 270px)'};
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
`
