import React from 'react';
import ItemAction from './ItemAction';
import './ItemCard.css';

const ItemCard = ({ name, qty, purpose, id }) => {
    return (
        <div className='ItemCard'>
            <div className='ItemCard-left'>
                <h3>{name}</h3>
                <p>Quantity: {qty}</p>
                <p>Purpose: {purpose}</p>
            </div>
            <div className='ItemCard-right'>
                <ItemAction id={id} />
            </div>
        </div>
    )
}

export default ItemCard;
