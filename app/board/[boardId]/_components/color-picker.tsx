'use client'

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas"

interface ColorPickerProps {
    onChange: (color:Color) => void;
}

export const ColorPicker = ({
    onChange
}: ColorPickerProps) => {
    return(
        <div className="flex flex-wrap gap-2
        items-center max-w-[164px] pr-2
        mr-2 border-r bordere-neutral-200">
            <ColorButton onClick={onChange} color={{r:243, g:215, b:115}}/>
            <ColorButton onClick={onChange} color={{r:143, g:199, b:21}}/>
            <ColorButton onClick={onChange} color={{r:43, g:75, b:233}}/>
            <ColorButton onClick={onChange} color={{r:21, g:48, b:213}}/>
            <ColorButton onClick={onChange} color={{r:35, g:211, b:183}}/>
            <ColorButton onClick={onChange} color={{r:49, g:138, b:191}}/>
            <ColorButton onClick={onChange} color={{r:18, g:38, b:83}}/>
            <ColorButton onClick={onChange} color={{r:255, g:71, b:51}}/>
        </div>
    )
}

interface ColorButtonProps {
    onClick: (color:Color) => void;
    color: Color;
};

const ColorButton = ({
    onClick,
    color
}: ColorButtonProps) => {
    return (
    <button className="w-8 h-8 items-center
    flex justify-center hover:opacity-75"
    onClick={() => onClick(color)}>
        <div className="h-8 w-8 rounded-md
        border border-neutral-300"
        style={{
            background: colorToCss(color)
        }}>

        </div>
    </button>
    )
}