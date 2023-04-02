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
  background-image: linear-gradient(to right top, #4891bb, #478bb9, #4886b7, #4980b5, #4c7ab2, #4b77b3, #4b73b4, #4c6fb5, #496cba, #486ac0, #4866c5, #4963c9);
`
const dayContentTheme = css`
  background-color: #f0f4f5;
  border: 1px solid #e7e1e1;
`
const nightHoverTheme = css`
  background-color: #000000;
  background-image: linear-gradient(to right top, #41a3db, #3c9bd8, #3a92d5, #3b89d1, #3f80cd, #3f7cce, #4178cf, #4473d0, #4472d7, #4571de, #486fe5, #4d6deb);
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
