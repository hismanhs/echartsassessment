import React, { useState } from "react";
import Chart from "./Components/Chart";
import TogelButton from './Components/TogelButton';
import "./styles.css";

export default function App() {
  const [Requiredstyle, setStyle] = useState({})

  const DefaultPosition = {
    width: '100%'
  }
  const PositionLeft = {
    right: '0', width: '50%', position: 'absolute'
  }
  const PositionRight = {
    left: '0', width: '50%', position: 'absolute'
  }

  const handleStyle = (param1, param2) => {
    if (param1 === 'CurrentPosition') {
      param2 ? setStyle(PositionLeft) : setStyle(PositionRight)
    } else {
      setStyle(DefaultPosition)
    }
  }
  
  return (
    <div>
      <TogelButton handleStyles={handleStyle} />
      <div style={{ position: 'relative' }}>
        <div style={Requiredstyle}>
          <Chart />
        </div>
      </div>
    </div>
  );
}
