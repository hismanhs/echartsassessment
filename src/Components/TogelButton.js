import React, { useState } from "react";

export default function TogelButton(props) {
    const [Active, setActive] = useState(false)
    const [position, setPosition] = useState(false)
    const handleStyle = (e) => {
        if (e == 'Active') {
            setActive(!Active)
            props.handleStyles('DefaultPosition', !position)
        } else {
            setPosition(!position)
            props.handleStyles('CurrentPosition', !position)
        }
    }

    return (
        <div className="TabContainer">
            <span
                onClick={() => handleStyle('Active')}
                className="ActiveTab"
                style={{
                    backgroundColor: Active ? "#d3d3d3" : "#1976d2",
                    color: Active ? 'black' : '#FFFF'
                }}
            >
                {Active ? 'Click To Set Default Position' : 'Click to Toggle Position'}
            </span>
            {Active && <span
                onClick={() => handleStyle('Position')}
                className="ActiveTab"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    color: 'black'
                }}
            >
                {position ? <p><span className="left"></span>Click to Move Left</p> : <p>Click to Move Right<span className="right"></span></p>}

            </span>}
        </div>
    );
}

