import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOrderHistory() {
    try{
        const orderHistoryResponse = yield axios.get('/api/orderhistory');
        yield put({type: 'SET_ORDER_HISTORY', payload: orderHistoryResponse.data})
        console.log('Fetched order history:', orderHistoryResponse.data);

    }
    
    catch (error){
        console.log('order history saga get request error', error)
    }
}

function* orderHistorySaga () {
    yield takeLatest('FETCH_ORDER_HISTORY', fetchOrderHistory);
}

export default orderHistorySaga;
