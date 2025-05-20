import React, { useState } from "react";
import GameButton from "./GameButton";
import GameMessage from "./GameMessage";
import "./HealthStatus.css";

const HealthStatus = ({ minDamage, maxDamage }) => {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [message, setMessage] = useState("Engage the enemy ☄️");

    const updateHealth = () => {
        const playerDamage = Math.floor(Math.random() * maxDamage) + minDamage;
        const enemyDamage = Math.floor(Math.random() * maxDamage) + minDamage;

        const updatedPlayerHealth = Math.max(playerHealth - playerDamage, 0);
        const updatedEnemyHealth = Math.max(enemyHealth - enemyDamage, 0);

        setPlayerHealth(updatedPlayerHealth);
        setEnemyHealth(updatedEnemyHealth);

        updateMessage(updatedPlayerHealth, updatedEnemyHealth);
    }    

    const updateIcon = (health) => {
        if (health === 0) return "💀";
        if (health < 100) return "❤️‍🩹";
        return "❤️";
    }

    const restartGame = () => {
        setPlayerHealth(100);
        setEnemyHealth(100);
        setMessage("Engage the enemy ☄️");
    }

    const updateMessage = (playerHealth, enemyHealth) => {
        const playerWin = "Congratulations! 😎💪 You successfully defended your aircraft";
        const enemyWin = "Mission failed. 😵 Your spacecraft has been defeated."
        const draw = "It's a draw. 🤝 Both spacecrafts have been neutralized."

        if (playerHealth === 0 && enemyHealth === 0) {
            setMessage(draw);
        } else if (playerHealth === 0 && enemyHealth >= 0) {
            setMessage(enemyWin);
        } else if (enemyHealth === 0 && playerHealth >= 0) {
            setMessage(playerWin);
        }
    }

    return (
        <div className="HealthStatus">
            <div className="HealthStatus-heading">
                <h1>Space Battle Simulator</h1>
            </div>
            <div className="HealthStatus-container">
                <p className="HealthStatus-player">Player Health: {playerHealth} {updateIcon(playerHealth)}</p>
                <GameButton updateHealth={updateHealth} restartGame={restartGame} playerHealth={playerHealth} enemyHealth={enemyHealth} />
                <p className="HealthStatus-enemy">Enemy Health: {enemyHealth} {updateIcon(enemyHealth)}</p>
            </div>
            <GameMessage message={message} />
        </div>
    )
}

export default HealthStatus;