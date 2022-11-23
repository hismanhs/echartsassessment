import React from "react";
import Chart from "./Components/Chart";
import DragComponet from "./Components/Drag";
import "./styles.css";

export default function App() {
  const [ActiveDrag, setActiveDrag] = React.useState(false);
  const [position, setPosition] = React.useState(false)
  const [Active, setActive] = React.useState(false)

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <span
          onClick={() => setActiveDrag(!ActiveDrag)}
          className="togelTab"
          style={{
            backgroundColor: ActiveDrag ? "red" : "#d3d3d3"
          }}
        >
          {!ActiveDrag ? "Click to Activate Drag " : "Click to Deactivate Drag"}
        </span>
        <span
          onClick={() => setActive(!Active)}
          className="togelTab"
          style={{
            backgroundColor: Active ? "#90D790" : "#d3d3d3"
          }}
        >{Active ? 'Click To Set Default Position': 'Click to toggle position' }</span>
        {Active && <span
          onClick={() => setPosition(!position)}
          className="togelTab"
          style={{
            backgroundColor: ActiveDrag ? "red" : "#B8FFB8"
          }}
        >{position ? 'Click to Move Left' : 'Click to Move Right'}</span>}
      </div>
      <div style={{ position: 'relative' }}>
        <div className={!Active&&"positionContainer"} style={position ? { right: '0', width: '50%', position: 'absolute' } : { left: '0', width: '50%', position: 'absolute' }}>
          <DragComponet Active={ActiveDrag}>
            <Chart />
          </DragComponet>
        </div>
      </div>

    </div>
  );
}
