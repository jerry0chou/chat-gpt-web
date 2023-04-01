import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../store/reducer/header";
import {nightTheme, dayTheme} from "../common/css";

export const MainContainer = styled.div<{ theme: Theme }>`
  height: 100vh;
  overflow: scroll;
  ${p=> p.theme === Theme.night ? nightTheme : dayTheme}
`
export const AppContainer = styled.div<{theme: Theme}>`
  display: flex;
  flex-direction: row;
  ${p=> p.theme === Theme.night ? nightTheme : dayTheme}
`