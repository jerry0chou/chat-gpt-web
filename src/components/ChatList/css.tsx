import React from "react";
import styled from "styled-components";
import {Theme} from "../../store/reducer/header";

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`
export const CardContainer = styled.div<{ theme: Theme }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 8px;
  border-radius: 10px;
`
export const ProfileContainer = styled.div<{role: string}>`
  margin-left: ${p => p.role === 'user' ? '3px' : '0'};
  margin-right: ${p => p.role === 'system' ? '3px' : '0'};
`
export const ContentContainer = styled.div<{role: string, theme: Theme}>`
  display: flex;
  flex-direction: column;
  border-radius: ${p => p.role === 'user' ? '15px 0 15px 15px' : '0 15px 15px 15px'};
  padding: 10px 10px;
  background-color: ${p => p.theme === Theme.day ? p.role === 'user'? '#bbe5fd': '#daf8d4' : 
    p.role === 'system'? '#32935b': '#3968e1'};
  margin-left: ${p => p.role === 'user' ? 'auto' : '0'};
`