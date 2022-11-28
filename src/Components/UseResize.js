import { useState, useEffect } from "react";

export const useResize = (ref, deps = [], options) => {
    const {
        onPointerDown = () => { },
        onPointerUp = () => { },
        onPointerMove = () => { },
        onSizeChange = () => { }
    } = options;

    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener("pointerdown", handlePointerDown);
            element.addEventListener("pointerup", handlePointerUp);
            element.addEventListener("pointermove", handlePointerMove);

            return () => {
                element.removeEventListener("pointerdown", handlePointerDown);
                element.removeEventListener("pointerup", handlePointerUp);
                element.removeEventListener("pointermove", handlePointerMove);
            };
        }
    });

    const handlePointerDown = (e) => {
        setIsDragging(true);
        onPointerDown(e);
    };

    const handlePointerUp = (e) => {
        setIsDragging(false);
        onPointerUp(e);
    };

    const handlePointerMove = (e) => {
        onPointerMove(e);
        if (isDragging) {
            onSizeChange(e);
        }
    };

    return { isDragging };
};
