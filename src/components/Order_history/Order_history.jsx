import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'; 

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
                            {/* Format the created_at date using moment */}
                            <td>{moment(items.created_at).format('MMMM D, YYYY - h:mm A')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderHistory;
