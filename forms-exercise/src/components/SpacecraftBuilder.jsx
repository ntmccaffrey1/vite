import React, { useState } from 'react';
import ItemForm from "./ItemForm";
import InventoryDisplay from './InventoryDisplay';
import ItemContext from '../context/item-context';
import { v4 as uuid } from 'uuid';

const SpacecraftBuilder = () => {
    const [items, setItems] = useState([]);
    const addItem = (newItem) => {
        setItems(items => [...items, { ...newItem, id: uuid() }])
    }

    const removeItem = (itemToRemove) => {
        setItems(items => items.filter(item => item.id !== itemToRemove));
    }

    return (
        <div>
            <h1>Spacecraft Builder</h1>
            <ItemForm addItem={addItem}/>
            <ItemContext.Provider value={removeItem}>
                <InventoryDisplay items={items} />
            </ItemContext.Provider>    
        </div>
    )
}

export default SpacecraftBuilder;
