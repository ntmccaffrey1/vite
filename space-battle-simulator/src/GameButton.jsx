import React from "react";
import "./GameButton.css";

const GameButton = ({ playerHealth, enemyHealth, updateHealth, restartGame }) => {

    const gameOver = playerHealth <= 0 || enemyHealth <= 0;

    return (
        <div className="GameButton">
            <button className={`GameButton-btn ${gameOver ? "restart" : "fire"}`} onClick={gameOver ? restartGame : updateHealth}>
                {gameOver ? "Restart" : "Fire"}
            </button>
        </div>
    )
}

export default GameButton;