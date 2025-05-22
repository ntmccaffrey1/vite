import React, { forwardRef } from "react";
import "./Star.css";

const Star = ({ x, y, destroyStar, ref }) => {
    return (
        <div className="Star" ref={ref} tabIndex="-1" onClick={() => destroyStar()} style={{left: `${x}px`, top: `${y}px` }}>
            <svg className="Star-icon" width="50" height="50" viewBox="0 0 100 100">
                <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="gold"/>
            </svg>
        </div>
    )
}

export default Star;