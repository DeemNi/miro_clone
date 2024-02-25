'use client'

import { useOthersConnectionIds } from "@/liveblocks.config";
import { memo } from "react"
import { Cursor } from "./cursor";

const Cursors = () => {
    const ids = useOthersConnectionIds();

    return (
        <>
        {ids.map((connectionId) => (
            <Cursor
                key={connectionId}
                connectionId={connectionId} />
        ))}
        </>
    )
}

export const CursorPresence = memo(() => {
    return (
        <>
        <p><Cursors /></p>
        </>
    )
});

CursorPresence.displayName = 'CursorPresence';