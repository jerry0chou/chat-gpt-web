import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../../store/reducer/header";

export const ChatListContainer = styled.div`
   display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 180px;
  margin-top: 60px;
`
const nightContentTheme = css`
  background-color: #485461;
  background-image: linear-gradient(to right top, #4c4c54, #484a52, #454750, #41454d, #3d434b, #3a4149, #373f48, #343d46, #313b44, #2e3842, #2c3641, #29343f);
`
const dayContentTheme = css`
  background-color: #f0f4f5;
  border: 1px solid #e7e1e1;
`
const nightHoverTheme = css`
  background-color: #000000;
  background-image: linear-gradient(to right top, #5a5a6e, #575a6e, #545a6d, #515a6d, #4e5a6c, #4b5869, #495667, #465464, #425060, #3e4c5b, #3a4857, #364453);
`

const dayHoverTheme = css`
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
`
export const CardContainer = styled.div<{theme: Theme}>`
  position: relative;
  display: flex;
  width: 95%;
  flex-direction: row;
  gap: 10px;
  padding: 30px 10px;
  border-radius: 10px;
  ${p=> p.theme === Theme.day? dayContentTheme: nightContentTheme};
  
  &:hover {
    cursor: pointer;
    ${p=> p.theme === Theme.day? dayHoverTheme: nightHoverTheme};
  }
`
