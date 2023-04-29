import React from "react";
import styled from "styled-components";

export const CodeDisplayContainer = styled.div`
  position: relative;
`
export const MarkdownContainer = styled.div<{ fontSize: number }>`
  margin-top: 10px;
  font-size: ${p => p.fontSize - 5}px;
  margin-bottom: 10px;
  position: relative;
  border: #a1ceea 1px solid;
  border-radius: 12px;
  background-color: #eeeae4;
  padding: 23px 8px 0px 8px;
`

export const CopyContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
`
export const LanguageContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 26px;
  background-color: #e0e0d2;
  border-radius: 8px;
  padding: 2px 2px;
  font-size: 14px;
  font-family: monospace;
`
