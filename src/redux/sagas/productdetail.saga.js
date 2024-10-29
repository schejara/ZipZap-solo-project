import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProductsDetail(action) {
    const id = action.payload;
    try{
        const productDetailResponse = yield axios.get(`/api/productsdetail/${id}`);
        console.log('Fetched product response:', productDetailResponse.data);
        yield put({type: 'SET_PRODUCTS_DETAIL', payload: productDetailResponse.data})
    }
    
    catch (error){
        console.log('product saga get request error', error)
    }
}

function* productDetailSaga(){
    yield takeLatest('FETCH_PRODUCTS_DETAIL', fetchProductsDetail)
   
}


export default productDetailSaga