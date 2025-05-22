import React from "react";
import "./CardsList.css";

const CardsList = ({ cards }) => {
    
    return (
        <>
            <div className="CardsList">
                {cards.map((card, x) => (
                    <img style={{transform: `translate(-50%, 0) rotate(${card.rotate}deg)`}} key={card.code} src={card.image} />
                ))}
            </div>
        </>
    )
}

export default CardsList;