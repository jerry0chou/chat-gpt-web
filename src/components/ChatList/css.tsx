import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../../store/reducer/header";

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 120px;
`
const nightContentTheme = css`
  background-color: #354350;
  //background-image: linear-gradient(to right top, #4c4c54, #484a52, #454750, #41454d, #3d434b, #3a4149, #373f48, #343d46, #313b44, #2e3842, #2c3641, #29343f);
`
const dayContentTheme = css`
  background-color: #f0f4f5;
  border: 1px solid #e7e1e1;
`

const dayHoverTheme = css`
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
`
export const CardContainer = styled.div<{ theme: Theme }>`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 14px 15px;
  border-radius: 10px;
  ${p => p.theme === Theme.day ? dayContentTheme : nightContentTheme};
`
export const ProfileContainer = styled.div<{role: string}>`
  position: absolute;
  top: 5px;
  ${p=>{if(p.role === 'system') return 'left: 5px;'}}}
  ${p=>{if(p.role === 'user') return 'right: 5px;'}}}
`
export const ContentContainer = styled.div<{role: string}>`
  width: 95%;
  display: flex;
  margin-left: ${p =>  p.role === 'system'? 38: 0 }px;
  margin-right: ${p =>  p.role === 'user'? 38: 0 }px;
  flex-direction: column;
  align-items: ${p => {
    if (p.role === 'system') return 'flex-start;'
    else return 'flex-end;'
  }};
`