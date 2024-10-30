import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function CheckOut() {
    const checkOutItems = useSelector((store) => store.checkOutReducer.items);
    const dispatch = useDispatch();
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
    };

    // Calculate total amount and total quantity
    const { totalAmount, totalQuantity } = checkOutItems.reduce((acc, item) => {
        acc.totalAmount += item.price * item.quantity; // Use item.quantity for subtotal
        acc.totalQuantity += item.quantity; // Sum up quantities
        return acc;
    }, { totalAmount: 0, totalQuantity: 0 });

    return (
        <div>
            <h1>This is a CheckOut Page</h1>
            <button onClick={home}>Home</button>
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
            <h3>Total Amount: ${totalAmount}</h3>
            <button onClick={orderSubmit}>Place Order</button>
        </div>
    );
}

export default CheckOut;
