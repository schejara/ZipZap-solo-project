import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './ViewBag.css';

function ViewBag() {
   
    const [count,setCount] = useState(1);
    const bagItems = useSelector((store) => store.bagReducer.items);
    console.log('bagItems',bagItems);
    const dispatch = useDispatch();    
    const history = useHistory();   

    const proceedToCheckOut = () => {
        dispatch({ type: 'ADD_TO_CHECK_OUT', payload: bagItems });
        history.push('/CheckOut')
    }
 
    const handleIncrease = () => {
    
        setCount(count + 1);
    };

    const handleDecrease = () => {
    
        if(count > 0){
        setCount(count - 1);
        }
    };  
    return (
        <div className="cart-container">  
       
     
            <div>
                {bagItems.map((items,id) => (
                    <li key={id}>
                    <h2 >{items.name}</h2>
            <img src={items.image_url} alt={items.name} className='image'/>
            <div className="item-details">
            <p>{items.description}</p>
            <p>Price: ${items.price}</p>
            <div className="qty-controls">
            <button onClick={handleIncrease}>+</button>Qty : {count}
            <button onClick={handleDecrease}>-</button>
            </div>            
            </div>      
            

                </li>
                ))}
            </div>   
            
            <div>     
                
            <button  className="proceed-button" onClick={proceedToCheckOut} >Proceed To Check Out</button>
            </div>
        </div>
    );
}
export default ViewBag
