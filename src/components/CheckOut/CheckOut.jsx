import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CheckOut.css';

function CheckOut() {
    const checkOutItems = useSelector((store) => store.checkOutReducer.items);
    //const orderItems = useSelector((store) => store.orderReducer.items);
    const user = useSelector((store) => store.user);
  
    const dispatch = useDispatch();
    const history = useHistory();

   

    const cart = () => {
        history.push('/ViewBag');
    };

// Calculate total amount and total quantity
const { total_amount, totalQuantity } = checkOutItems.reduce((acc, item) => {
    acc.total_amount += item.price * item.quantity; // Use item.quantity for subtotal
    acc.totalQuantity += item.quantity; // Sum up quantities
    return acc;
}, { total_amount: 0, totalQuantity: 0 });
const formattedTotalAmount = total_amount.toFixed(2);


const orderItemDetails = checkOutItems.map(item => ({
    product_id: item.product_id, // Make sure you have this in your item
    quantity: item.quantity,
    price: item.price,
}));


const orderSubmit = (event) => {
    event.preventDefault();
    const user_id = user.id;
    let data = {
      user_id: user_id,
      total_amount:total_amount,
      orderItemDetails,
    };

    console.log('Submitting order:', data); // Check the submitted data

    dispatch({
      type: "ADD_ORDER",
      payload: data,
    });
    history.push('/CustomerInfo');
  };

    

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Your Cart</h1>
            
          
            <table className="checkout-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {checkOutItems.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${(item.price * item.quantity)}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
            <div  className="checkout-summary">
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Amount: ${formattedTotalAmount}</h3>
            </div>
           
            <button className="checkout-submit-button" onClick={orderSubmit}>Continue</button>
        </div>
    );
}

export default CheckOut;
