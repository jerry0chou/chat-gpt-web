import React from "react";
import {GuideContent, GuideInnerContainer, GuideOuterContainer, GuideTitle} from "./css";
export default function Guide(){
    return (
        <GuideOuterContainer>
            <GuideInnerContainer>
                <GuideTitle>Jerry's ChatGPT Space</GuideTitle>
                <GuideContent>Features are as follows:</GuideContent>
                <GuideContent>☀️Enable multiple tabs to converse with GPT</GuideContent>
                <GuideContent>☀️Adapt effortlessly layout based on width</GuideContent>
                <GuideContent>☀️Access this site unlimitedly by any devices</GuideContent>
                <GuideContent>☀️Switch seamlessly from night to day mode</GuideContent>
                <GuideContent>☀️Scale font size at your disposal</GuideContent>
                <GuideContent>☀️Respond question interactively and swiftly</GuideContent>
                <GuideContent>☀️Copy code with one click</GuideContent>
                <GuideContent>☀️Utilize hot key(↑, ↓) to browser history</GuideContent>
                <GuideContent >😁Please stay tuned for the latest updates</GuideContent>
                <GuideContent style={{marginBottom: 10}}>🙏if you find my project useful, please star me</GuideContent>
            </GuideInnerContainer>
        </GuideOuterContainer>
    )
}