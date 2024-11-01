import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import productReducer from './product.reducer';


import orderDetail from './orderdetail.reducer';
import productDetailReducer from './productdetail.reducer';
import bagReducer from './bag.reducer';
import checkOutReducer from './checkout.reducer';
import orderConfirmationReducer from './orderconfirmation.reducer';
import orderReducer from './order.reducer';
import orderHistoryReducer from './orderhistory.reducer';
import adminReducer from './admin.reducer';
import categoryReducer from './category.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  productReducer,
  categoryReducer,
  orderReducer,
  orderDetail,
  productDetailReducer,
  bagReducer,
  checkOutReducer,
  orderConfirmationReducer,
  orderHistoryReducer,
  adminReducer,
});

export default rootReducer;
