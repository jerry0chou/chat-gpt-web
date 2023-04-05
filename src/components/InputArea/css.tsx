import React from "react";
import styled from "styled-components";
import {Theme} from "../../store/reducer/header";

export const InputContainer = styled.div<{theme: Theme}>`
  display: flex;
  width: calc(100vw - 256px);
  height: 65px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: ${p=> p.theme === Theme.day? '#ffffff': '#181622'};
`
export const Input = styled.input<{theme: Theme}>`
  width: 80%;
  height: 62%;
  border: 1px solid ${p => p.theme === Theme.day ? '#c2c8d0' : '#10417a'};
  background: ${p => p.theme === Theme.day ? '#ffffff' : '#313436'};
  border-radius: 10px;
  color: ${p => p.theme === Theme.day ? '#62646e' : '#ffffff'};;
  outline: none;
  font-size: 20px;
  padding: 0 10px;

  &:focus {
    border: 1px solid #3875f6;
  }
`
