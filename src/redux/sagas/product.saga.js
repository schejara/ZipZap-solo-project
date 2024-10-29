import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProducts() {
    try{
        const productResponse = yield axios.get('/api/products');
        yield put({type: 'SET_PRODUCT', payload: productResponse.data})
    }
    
    catch (error){
        console.log('product saga get request error', error)
    }
}

function* addItem(action){
    try {
        yield axios.post('/api/products', action.payload)
        yield put({type: 'FETCH_PRODUCTS'})
    } catch (error) {
        console.error('Error with addItem', error)
    }
}

function* deleteItem(action){
    try {
        yield axios.delete(`/api/products/${action.payload.id}/${action.payload.user_id}`)
        yield put({type: 'FETCH_PRODUCT'})
    } catch (error) {
        console.error('Error Deleting Item Saga', error)
    }
}

function* productSaga(){
    yield takeLatest('FETCH_PRODUCTS', fetchProducts)
    yield takeLatest('ADD_ITEM', addItem)
    yield takeLatest('DELETE_ITEM', deleteItem)
}


export default productSaga