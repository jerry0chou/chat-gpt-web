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
    background-color: ${p => p.theme === Theme.day ? '#cbd1d9' : '#041527'};
`