import { useState, useEffect } from "react";

export const useResize = (ref, deps = [], options) => {
    const {
        onResize = () => { },
        onSizeChange = () => { }
    } = options;

    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener("resize", handleResize);
            const observer = new MutationObserver(handleResize);
            observer.observe(element, { attributes: true, attributeOldValue: true, attributeFilter: ['style'] });
            return () => {
                element.addEventListener("resize", handleResize);
            };
        }
    });
   
    const handleResize = (el) => {
        
        const width = parseInt(el.clientWidth);
        const height = parseInt(el.clientHeight);
        onResize(el)
        onSizeChange({
            width: `${width}px`,
            height: `${height}px`
        });
    }

    return { isDragging };
};
