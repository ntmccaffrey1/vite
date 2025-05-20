import React from "react";
import "./GameMessage.css";

const GameMessage = ({ message }) => {
    return (
        <div className="GameMessage">
            <p>{message}</p>
        </div>
    )
}

export default GameMessage;