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

function*adminSaga(){
    yield takeLatest('FETCH_ADMIN', fetchAdmin)
}

export default adminSaga