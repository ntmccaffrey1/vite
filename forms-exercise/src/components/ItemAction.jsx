import React, { useContext } from 'react';
import ItemContext from '../context/item-context';
import './ItemAction.css';

const ItemAction = ({ id }) => {
    const removeItem = useContext(ItemContext);
    return (
        <div className='ItemAction'>
            <button onClick={() => removeItem(id)}>Delete</button>
        </div>
    )
}

export default ItemAction;
