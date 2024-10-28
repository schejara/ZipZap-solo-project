import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCategory() {
    try{
        const productResponse = yield axios.get('/api/category');
        yield put({type: 'SET_CATEGORY', payload: productResponse.data})
    }
    
    catch (error){
        console.log('Category saga get request error', error)
    }
}

function* categorySaga () {
    yield takeLatest('FETCH_CATEGORY', fetchCategory);
}

export default categorySaga;
