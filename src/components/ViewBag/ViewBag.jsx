import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './ViewBag'

function ViewBag() {
   
    const [count,setCount] = useState(0);
    
    const history = useHistory();
    const bagItems = useSelector((store) => store.bagReducer.items);
    console.log('bagItems',bagItems);
    const dispatch = useDispatch();
    const home = () => {
        history.push('/Home')
    }
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
        <div>
            <h1>This is a  ViewBag Page</h1>
            <button onClick={home}>Home</button>
           
            <div>
                {bagItems.map((items,id) => (
                    <li key={id}>
                    <h2>{items.name}</h2>
            <img src={items.image_url} alt={items.name} />
            <p>{items.description}</p>
            <p>Price: ${items.price}</p>
            <p>Inventory: {items.inventory_count}</p>
            <button onClick={handleIncrease}>+</button>Qty : {count}
            <button onClick={handleDecrease}>-</button>
            
           
            

                </li>
                ))}
            </div>
           
            
            <div>
           
                
            <button onClick={proceedToCheckOut}>Proceed To Check Out</button>
            </div>
        </div>
    );
}


export default ViewBag
