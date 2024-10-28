import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOrderDetail() {
    try{
        const productResponse = yield axios.get('/api/orderdetail');
        yield put({type: 'SET_ORDER_DETAIL', payload: productResponse.data})
    }
    
    catch (error){
        console.log('Order detail saga get request error', error)
    }
}

function* orderDetailSaga () {
    yield takeLatest('FETCH_ORDER_DETAIL', fetchOrderDetail);
}

export default orderDetailSaga;
