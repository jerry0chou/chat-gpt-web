import React from "react";
import {Theme} from "../../store/reducer/header";
import styled from "styled-components";

export const PositionTag = styled.div<{ theme: Theme }>`
    position: fixed;
    width: 256px;
    height: 65px;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${p => p.theme === Theme.day ? '#ffffff' : '#041527'};
`
export const Tag = styled.div<{start: string, end: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-radius: 20px;
  background-color: ${p => p.start};
  background-image: linear-gradient(315deg, ${p=> p.start} 0%, ${p=> p.end} 74%);
`
export const TagText = styled.div<{color: string}>`
  font-size: 13px;
  color: ${p=> p.color};
  padding: 0 10px;
`