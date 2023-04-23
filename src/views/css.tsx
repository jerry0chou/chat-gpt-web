import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../store/reducer/header";
export const dayTheme  = css`
  background-color: #f9fcff;
`
export const nightTheme = css`
  background-color: #17202a;
`
export const MainContainer = styled.div<{ theme: Theme, foldMenu: boolean }>`
  height: calc(100vh - 50px);
  width: ${p=> p.foldMenu? '100vw': 'calc(100vw - 270px)'};
  /* hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  ${p => p.theme === Theme.night ? nightTheme : dayTheme}
`
export const AppContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  ${p => p.theme === Theme.night ? nightTheme : dayTheme}
`

export const SideMenuContainer = styled.div<{ theme: Theme }>`
  width: 270px;
  height: calc(100vh - 50px);
  background-color: ${p => p.theme === Theme.night ? '#041527' : '#d9e4ee'};
  border-right: ${p => p.theme === Theme.day ? '#dde3e8' : '#2d3b5e'} 1px solid;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`
export const SideMainContainer = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100vw;
  flex-direction: row;
`