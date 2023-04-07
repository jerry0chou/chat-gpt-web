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
  background-color: #f5f2f0;
`

export const CopyContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  border-radius: 10px;
  background: #eadfdf;
`