import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function ViewBag() {
    const history = useHistory();
    const bagItems = useSelector((store) => store.bagReducer.items);

    const home = () => {
        history.push('/Home')
    }
    
    return (
        <div>
            <h1>This is a  ViewBag Page</h1>
            <button onClick={home}>Home</button>
           
            <div>
                {bagItems.map((items) => (
                    <li key={items.id}>
                    <h2>{items.name}</h2>
            <img src={items.image_url} alt={items.name} />
            <p>{items.description}</p>
            <p>Price: ${items.price}</p>
            <p>Inventory: {items.inventory_count}</p>

                </li>
                ))}
            </div>
        </div>
    );
}


export default ViewBag;
