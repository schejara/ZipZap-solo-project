import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function OrderHistory() {
    const dispatch = useDispatch();
    const orderHistory = useSelector((store) => store.orderHistoryReducer.items);
    console.log('orderHistory', orderHistory);

    const history = useHistory();

    const home = () => {
        history.push('/Home');
    };
    const cart = () => {
        history.push('/ViewBag');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_ORDER_HISTORY' });
    }, [dispatch]);

    return (
        <div>
            <h1>This is an Order History Page</h1>
            <button onClick={home}>Home</button>
            <button onClick={cart}>Cart</button>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Total Amount</th>
                        <th>Order Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orderHistory.map((items) => (
                        <tr key={items.order_id}>
                            <td>{items.user_id}</td>
                            <td>{items.total_amount}</td>
                            <td>{items.order_status}</td>
                            <td>{items.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderHistory;
