import React, { useRef } from "react";
import { useResize } from "./UseResize";

export default function ResizeComponet(props) {
    const divRef = useRef();
    const handleDrag = (e) => {
        props.handelSize({
            width: `${e.clientX - 48}px`,
            height: `${e.clientY - 48}px`
        });
    };
    const Resize = useResize(divRef, [], {
        onSizeChange: handleDrag
    })

    return (
        <div ref={divRef} className="chart-container">
            {props.children}
        </div>
    );
}
