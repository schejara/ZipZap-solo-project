import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
    history.push('/OrderConfirmation');
  };

    

    return (
        <div>
            <h1>This is a CheckOut Page</h1>
            
            <button onClick={cart}>Cart</button>
            <table>
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
                            <td>{item.quantity}</td> {/* Display quantity here */}
                            <td>${(item.price * item.quantity)}</td> {/* Subtotal for each item */}
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Amount: ${total_amount}</h3>
            <button onClick={orderSubmit}>Place Order</button>
        </div>
    );
}

export default CheckOut;
