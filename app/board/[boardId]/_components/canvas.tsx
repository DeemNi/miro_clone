'use client'

import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

export const Canvas = ({boardId}: {
    boardId:string
}) => {
    return (
        <main
         className="h-full w-full 
         bg-neutral-100 touch-none">
            <Info />
            <Participants /> 
            <Toolbar />
        </main>
    )
}