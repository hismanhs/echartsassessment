import React, { useRef, useState } from "react";

import { useDrag } from "./CustomDrag";

export default function DragComponet(props) {
  const divRef = useRef();

  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleDrag = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  const drag = useDrag(divRef, [translate], {
    onDrag: handleDrag
  });

  return (
    <>
      <div
        ref={divRef}
        style={{
          border: drag.isDragging ? "2px solid #FFF" : "",
          borderRadius: "4px",
          transform: props.Active
            ? `translateX(${translate.x}px) translateY(${translate.y}px)`
            : ""
        }}
      >
        {props.children}
      </div>
    </>
  );
}
