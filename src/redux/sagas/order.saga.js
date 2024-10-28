import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOrder() {
    try{
        const productResponse = yield axios.get('/api/order');
        yield put({type: 'SET_ORDER', payload: productResponse.data})
    }
    
    catch (error){
        console.log('order saga get request error', error)
    }
}

function* addOrder(action){
    try {
        yield axios.post('/api/order', action.payload)
        yield put({type: 'FETCH_ORDER'})
    } catch (error) {
        console.error('Error with addOrder', error)
    }
}

function* deleteOrder(action){
    try {
        yield axios.delete(`/api/order/${action.payload.id}/${action.payload.user_id}`)
        yield put({type: 'FETCH_ORDER'})
    } catch (error) {
        console.error('Error Deleting order Saga', error)
    }
}

function* orderSaga(){
    yield takeLatest('FETCH_ORDER', fetchOrder)
    yield takeLatest('ADD_ORDER', addOrder)
    yield takeLatest('DELETE_ORDER', deleteOrder)
}


export default orderSaga