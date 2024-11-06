import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './ViewBag.css';

function ViewBag() {
    const bagItems = useSelector((store) => store.bagReducer.items);
    const dispatch = useDispatch();
    const history = useHistory();

    const proceedToCheckOut = () => {
        dispatch({ type: 'ADD_TO_CHECK_OUT', payload: bagItems });
        history.push('/CheckOut');
    };

    const increaseQuantity = (product_id) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: product_id });
    };

    const decreaseQuantity = (product_id) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: product_id });
    };

    return (
        <div className="cart-container">
            <div>
                {bagItems.map((item) => (
                    <li key={item.product_id}>
                        <h2>{item.name}</h2>
                        <img src={item.image_url} alt={item.name} className="image" />
                        <div className="item-details">
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <div className="qty-controls">
                                <button onClick={() => increaseQuantity(item.product_id)}>+</button>
                                Qty: {item.quantity || 1} 
                                <button onClick={() => decreaseQuantity(item.product_id)}>-</button>
                            </div>
                        </div>
                    </li>
                ))}
            </div>

            <div>
                <button className="proceed-button" onClick={proceedToCheckOut}>Proceed To Check Out</button>
            </div>
        </div>
    );
}

export default ViewBag;
