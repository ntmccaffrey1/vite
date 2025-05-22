import React from "react";
import "./Buttons.css";

const Buttons = ({ drawCard, shuffleDeck, isLoading, cardsDrawing, drawDisabled }) => {
    return (
        <div className="Buttons-container">
            <button className="Buttons-drawCard" onClick={drawCard} disabled={isLoading || drawDisabled}>{cardsDrawing ? "Stop Drawing" : "Draw Cards"}</button>
            <button className="Buttons-shuffleCard" onClick={shuffleDeck} disabled={isLoading || cardsDrawing}>Shuffle Cards</button>
        </div>
    )
}

export default Buttons;