import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function OrderConfirmation() {
  
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
           
        </div>
    );
}


export default OrderConfirmation;
