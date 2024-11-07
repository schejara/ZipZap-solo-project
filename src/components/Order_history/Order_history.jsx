import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'; 
import './Order_history.css';

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
        <div className="order-history">
            <h1>This is an Order History Page</h1>
            <div className="buttons">
            <button onClick={home}>Home</button>
            <button onClick={cart}>Cart</button>
            </div>
            
            <table className="order-table">
                <thead>
                    <tr>
                        
                        <th>Order ID</th>
                        <th>Total Amount</th>
                        <th>Order Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orderHistory.map((items) => (
                        <tr key={items.order_id}>
                            <td>{items.order_id}</td>                          
                            <td>{items.total_amount}</td>
                            <td>{items.order_status}</td>                          
                            <td>{moment(items.created_at).format('MMMM D, YYYY - h:mm A')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderHistory;
