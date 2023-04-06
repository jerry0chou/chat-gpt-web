import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../store/reducer/header";
import {nightTheme, dayTheme} from "../common/css";

export const MainContainer = styled.div<{ theme: Theme }>`
  height: calc(100vh - 50px);
  width: calc(100vw - 256px);
  /* hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  ${p=> p.theme === Theme.night ? nightTheme : dayTheme}
`
export const AppContainer = styled.div<{theme: Theme}>`
  display: flex;
  flex-direction: row;
  ${p=> p.theme === Theme.night ? nightTheme : dayTheme}
`

export const SideMainContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  width: 256px;
  gap: 2px;
  height: calc(100vh - 50px);
  background-color: ${p=> p.theme === Theme.night ? '#041527': '#ffffff'};
  border-right: ${p=> p.theme === Theme.day? '#e7e1e1': '#2d3b5e' } 1px solid;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`