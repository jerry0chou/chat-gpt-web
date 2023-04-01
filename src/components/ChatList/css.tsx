import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../../store/reducer/header";

export const ChatListContainer = styled.div`
   display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 120px;
  margin-top: 60px;
`
const nightContentTheme = css`
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`
const dayContentTheme = css`
  background-color: #f0f4f5;
  border: 1px solid #e7e1e1;
`
const nightHoverTheme = css`
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
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
