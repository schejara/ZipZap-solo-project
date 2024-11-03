import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCategoryItem(action) {
    const id = action.payload;
    try{
        const categoryItemResponse = yield axios.get(`/api/categoryItem/${id}`);

        console.log('Fetched category response:', categoryItemResponse.data);
        yield put({type: 'SET_CATEGORY_ITEM', payload: categoryItemResponse.data})
    }
    
    catch (error){
        console.log('category item saga get request error', error)
    }
}

function* categoryItemSaga(){
    yield takeLatest('FETCH_CATEGORY_ITEM', fetchCategoryItem)
   
}
export default categoryItemSaga;
