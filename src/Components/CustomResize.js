import React, { useRef, useEffect } from "react";
import { useResize } from "./UseResize";

export default function ResizeComponet(props) {
    const divRef = useRef();
    const Resize = useResize(divRef, [], {
        onSizeChange: props.handelSize
    })
    useEffect(() => {
        const element = divRef.current;
        if (element) {
            element.addEventListener("resize", handleResize);
            const observer = new MutationObserver(handleResize);
            observer.observe(element, { attributes: true, attributeOldValue: true, attributeFilter: ['style'] });
            return () => {
                element.addEventListener("resize", handleResize);

            };
        }
    });
    useEffect(() => {
        handleResize()
    }, [props.togel]);

    const handleResize = () => {
        const el = divRef.current;
        const width = parseInt(el.clientWidth);
        const height = parseInt(el.clientHeight);
        props.handelSize({
            width: `${width}px`,
            height: `${height}px`
        })
    }

    return (
        <div style={props.togel}  >
            <div ref={divRef} className="chart-container" >
                {props.children}
            </div>
        </div>
    );
}
