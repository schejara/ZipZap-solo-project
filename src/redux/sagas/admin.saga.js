import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAdmin() {
    try{
        const productResponse = yield axios.get('/api/admin');
        yield put({type: 'SET_ADMIN', payload: productResponse.data})
    }
    
    catch (error){
        console.log('admin saga get request error', error)
    }
}
function* deleteItem(action){
    try {
        yield axios.delete(`/api/admin/${action.payload.product_id}`)
        yield put({type: 'FETCH_ADMIN'})
    } catch (error) {
        console.error('Error Deleting Item Saga', error)
    }
}

function* putItem(action){
    try {
        yield axios.put(`/api/admin/${action.payload.product_id} `, {
            inventory_count: action.payload.inventory_count, // Ensure this matches your database column
            price: action.payload.price,
        });
        
        yield put({type: 'FETCH_ADMIN'})
    } catch (error) {
        console.error('Error with addItem', error)
    }
}


function*adminSaga(){
    yield takeLatest('FETCH_ADMIN', fetchAdmin),
    yield takeLatest('DELETE_ITEM',deleteItem),
    yield takeLatest('PUT_ITEM',putItem)
}

export default adminSaga