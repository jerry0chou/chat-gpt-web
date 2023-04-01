import React from "react";
import './index.css'
import parse from 'html-react-parser';
import useAllStates from "../../hooks/useAllStates";
interface PlainTextDisplayProps{
    fontSize: number
    content: string;
}
export default function PlainTextDisplay(p: PlainTextDisplayProps){
    const {theme} = useAllStates()
    const color = theme === 'day' ?'#000000': '#ffffff'
    return <p style={{fontSize: p.fontSize, color: color, fontFamily: 'Helvetica, sans-serif'}}>
        {parse(p.content.replace(/`(.*?)`/g, "<span style='font-size: 17px; border: none; background: #87d068; color: #ffffff; padding: 3px; border-radius: 8px'>$1</span>"))}
    </p>
}