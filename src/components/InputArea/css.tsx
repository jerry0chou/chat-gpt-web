import React from "react";
import styled from "styled-components";
import {Theme} from "../../store/reducer/header";

export const InputContainer = styled.div<{theme: Theme}>`
  display: flex;
  width: calc(100vw - 256px);
  height: 65px;
  align-items: center;
  justify-content: center;
  background: ${p=> p.theme === Theme.day? '#ffffff': '#414141'};
`
