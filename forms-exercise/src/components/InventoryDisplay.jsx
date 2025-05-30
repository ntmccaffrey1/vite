import React  from 'react';
import ItemCard from './ItemCard';
import './InventoryDisplay.css';

const InventoryDisplay = ({ items }) => {

    return (
        <div className="InventoryDisplay">
            <h3>Inventory</h3>
            <div className="InventoryDisplay-container">
                {items.map((item) => (
                    <ItemCard key={item.id} id={item.id} name={item.name} qty={item.qty} purpose={item.purpose} />
                ))}
            </div>
        </div>
    )
}

export default InventoryDisplay;
