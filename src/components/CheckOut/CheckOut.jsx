import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function CheckOut() {
    const checkOutItems = useSelector((store) => store.checkOutReducer.items);
    const dispatch = useDispatch();
    console.log('checkout item',checkOutItems);
    const history = useHistory();

    const home = () => {
        history.push('/Home');
    };

    const cart = () => {
        history.push('/ViewBag');
    };

    const orderSubmit = () => {
        dispatch({ type: 'ADD_TO_ORDER_CONFIRMATION', payload: checkOutItems });
        history.push('/OrderConfirmation');
    }

    return (
        <div>
            <h1>This is a CheckOut Page</h1>
            <button onClick={home}>Home</button>
            <button onClick={cart}>Cart</button>
            <div>
            
                    {checkOutItems.map((item, id) => (
                        <li key={id}>
                            <h2>{item.name}</h2>
                            <img src={item.image_url} alt={item.name} />
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <p>Inventory: {item.inventory_count}</p>
                            
                         
                        </li>
                    ))}
                    <button onClick={orderSubmit}>Place Order</button>
               
            </div>
        </div>
    );
}

export default CheckOut;
