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

  // const handleImageClick = (id) => {
  //  console.log('id is',id);
  //   history.push(`/ProductDetail/${id}`); // Navigate to the detail page
  // };

  const goToCategory = () => {
 history.push('./Category');

  }


  return (
  //   <div className="container">
  //     <h2>Welcome, {user.username}!</h2>
  //     <p>Your ID is: {user.id}</p>
  //     <LogOutButton className="btn" />
  //   </div>,
  //   // <div>
      
  //   //   {product.map((productItem) => (
  //   //   <div key={productItem.product_id}>
  //   //      <p className="product-name">{productItem.name}</p>
  //   //     <img 
  //   //     src={productItem.image_url} 
  //   //     alt={productItem.product_name} 
  //   //     onClick={() => handleImageClick(productItem.product_id)}  />
       
  //   //   </div>
  //   ))
  //  };
  //   </div>
  <div className='first'>
 <img onClick={goToCategory} src=' https://slimages.macysassets.com/is/image/MacysInc/C2406584_106_FW_V2?resMode=sharp2&fmt=webp&wid=1440&hei=464'
  style={{ width: '100%', height: '300px', objectFit: 'cover' }}/>
 <img onClick={goToCategory} src='https://slimages.macysassets.com/is/image/MacysInc/C2406586_103?resMode=sharp2&fmt=webp&wid=1440&hei=634'
  style={{ width: '100%', height: '300px', objectFit: 'cover',marginTop:'40px' }}/>
'
 

  </div>
    
    
  )
}

// this allows us to use <App /> in index.js
export default UserPage
