import React from "react";
import parse from 'html-react-parser';
import useAllStates from "../../hooks/useAllStates";
interface PlainTextDisplayProps{
    fontSize: number
    content: string;
}
export default function PlainTextDisplay(p: PlainTextDisplayProps){
    const {theme} = useAllStates()
    const color = theme === 'day' ?'#000000': '#ffffff'

    const tagBgColor = theme === 'day' ? '#137eea' : '#0674ea'
    const tagStr = `<span style='font-size: ${p.fontSize - 2}px; border: none; background: ${tagBgColor}; color: #ffffff; padding: 3px; border-radius: 5px'>$1</span>`

    return <p style={{fontSize: p.fontSize, color: color,lineHeight: 1.4, fontFamily: 'sans-serif'}}>
        {parse(p.content.replace(/`(.*?)`/g, tagStr ))}
    </p>
}