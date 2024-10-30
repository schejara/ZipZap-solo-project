import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function OrderConfirmation() {
    const confirmItems = useSelector((store) => store.orderConfirmationReducer.items);
    const history = useHistory();
    const home = () => {
        history.push('/Home')
    }
    const cart = () => {
        history.push('/ViewBag')
    }
    
    return (
        <div>
            <h1>This is a OrderConfirmation Page</h1>
            <h2>Thank You! </h2>
            <h2>Your Order has been Confirmed.</h2>
            <button onClick={home}>Home</button>
            <button onClick={cart}>Cart</button>
            <div>
            {confirmItems.map((item, id) => (
                        <li key={id}>
                            <h2>{item.name}</h2>
                            <img src={item.image_url} alt={item.name} />
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <p>Inventory: {item.inventory_count}</p>
                            
                         
                        </li>
                    ))}
            </div>
        </div>
    );
}


export default OrderConfirmation;
