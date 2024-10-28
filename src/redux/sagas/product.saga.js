import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProduct() {
    try{
        const productResponse = yield axios.get('/api/product');
        yield put({type: 'SET_PRODUCT', payload: productResponse.data})
    }
    
    catch (error){
        console.log('product saga get request error', error)
    }
}

function* addItem(action){
    try {
        yield axios.post('/api/product', action.payload)
        yield put({type: 'FETCH_PRODUCT'})
    } catch (error) {
        console.error('Error with addItem', error)
    }
}

function* deleteItem(action){
    try {
        yield axios.delete(`/api/product/${action.payload.id}/${action.payload.user_id}`)
        yield put({type: 'FETCH_PRODUCT'})
    } catch (error) {
        console.error('Error Deleting Item Saga', error)
    }
}

function* productSaga(){
    yield takeLatest('FETCH_PRODUCT', fetchProduct)
    yield takeLatest('ADD_ITEM', addItem)
    yield takeLatest('DELETE_ITEM', deleteItem)
}


export default productSaga