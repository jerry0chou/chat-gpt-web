import React from "react";
import styled from "styled-components";

export const GuideOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  height: calc(100% - 100px);
  padding: 20px;
`
export const GuideInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: flex-start;
  width: 320px;
  height: 360px;
  border-radius: 25px;
  padding: 20px;
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
export const GuideTitle = styled.div`
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 800;
  color: #1c1c1e;
`
export const GuideContent = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #1c1c1e;
  margin-top: 10px;
  line-height: 1.5;
  text-align: center;
`

