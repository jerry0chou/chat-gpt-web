import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../../store/reducer/header";
import {ReactComponent as CopySVG} from "../../assets/copy.svg";
import {ReactComponent as AddToInputSVG} from "../../assets/addToInput.svg";

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`
export const CardContainer = styled.div<{ theme: Theme }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 8px;
  border-radius: 10px;
`
export const ProfileContainer = styled.div<{role: string}>`
  margin-left: ${p => p.role === 'user' ? '3px' : '0'};
  margin-right: ${p => p.role === 'system' ? '3px' : '0'};
`
const svgStyle = (p: { size: number, theme: Theme}) => {
    return css`
      width: ${p.size}px;
      height: ${p.size}px;

      & path {
        fill: ${p => p.theme === Theme.day ? '#000000' : '#ffffff'};
      }

      &:hover {
        cursor: pointer;
      }
    `
}
export const CopyIcon = styled(CopySVG)<{ size: number, theme: Theme}>`
  ${svgStyle};
`
export const AddToInputIcon = styled(AddToInputSVG)<{ size: number, theme: Theme}>`
    ${svgStyle};
`
export const CopyContainer = styled.div<{size: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  &:hover {
    cursor: pointer;
  }
`
export const ContentOutContainer = styled.div<{role: string}>`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.role === 'user' ? 'auto' : '0'};
  align-items: ${p => p.role === 'user' ? 'flex-end' : 'flex-start'};
`
export const OperationContainer = styled.div<{role: string}>`
  display: flex;
  flex-direction: ${p=> p.role === 'user' ? 'row-reverse' : 'row'};
  margin-left: ${p => p.role === 'user' ? 'auto' : '0px'};
  margin-right: ${p => p.role === 'system' ? 'auto' : '0px'};
  margin-bottom: 4px;
  gap: 9px;
`
export const DateContainer = styled.div<{theme: Theme}>`
  font-family: sans-serif;
  font-size: 14px;
  color: ${p => p.theme === Theme.day ? '#000000' : '#ffffff'};
`
export const ContentContainer = styled.div<{role: string, theme: Theme}>`
  display: flex;
  width: fit-content;
  //width: auto;
  flex-direction: column;
  align-items: flex-start;
  border-radius: ${p => p.role === 'user' ? '15px 0 15px 15px' : '0 15px 15px 15px'};
  padding: 10px 10px;
  ${p => p.theme === Theme.day ? p.role === 'user'?
                  'background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);': 'background-image linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)':
    p.role === 'system'? 
            'background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);':
            'background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%)'};
`