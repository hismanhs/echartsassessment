import React from "react";
import Chart from "./Components/Chart";
import DragComponet from "./Components/Drag";
import "./styles.css";

export default function App() {
  const [ActiveDrag, setActiveDrag] = React.useState(false);

  return (
    <div className="App">
      <div
        style={{
          cursor: "pointer",
          textAlign: "center",
          borderRadius: "15px",
          margin: "1rem",
          padding: "0.5rem",
          color: "#FFF",
          backgroundColor: ActiveDrag ? "red" : "rgba(26, 137, 23, 1)"
        }}
        onClick={() => setActiveDrag(!ActiveDrag)}
      >
        {!ActiveDrag ? "Activate Drag " : "Deactivate Drag"}
      </div>
      <DragComponet Active={ActiveDrag}>
        <Chart />
      </DragComponet>
    </div>
  );
}
