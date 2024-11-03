import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import './Userpage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const product = useSelector((store) => store.productReducer.products);
  
  const dispatch = useDispatch();
  const history = useHistory();

  console.log('product is', product);

  useEffect(() => {
    dispatch({type:'FETCH_PRODUCTS'});
  },[]);

  const handleImageClick = (id) => {
   console.log('id is',id);
    history.push(`/ProductDetail/${id}`); // Navigate to the detail page
  };


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>,
    <div>
      
      {product.map((productItem) => (
      <div key={productItem.product_id}>
         <p className="product-name">{productItem.name}</p>
        <img 
        src={productItem.image_url} 
        alt={productItem.product_name} 
        onClick={() => handleImageClick(productItem.product_id)}  />
       
      </div>
    ))
   };
    </div>
    
    
  )
}

// this allows us to use <App /> in index.js
export default UserPage
