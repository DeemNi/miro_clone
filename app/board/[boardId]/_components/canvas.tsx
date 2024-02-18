'use client'

import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

export const Canvas = () => {
    return (
        <main
         className="h-full w-full 
         bg-neutral-500 touch-none">
            <Info />
            <Participants /> 
            <Toolbar />
        </main>
    )
}