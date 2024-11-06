import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Admin() {
    const dispatch = useDispatch();
    const[inventory,setInventory] = useState('');
    const[price,setPrice] = useState('');
   const info = useSelector((store) => store.adminReducer.products);

   const deleteItem = (item) => {
    const confirmDelete = window.confirm(`WARNING! Are you sure you want to delete ${item.name}?`);
    if (confirmDelete) {
        console.log('item to be deleted is', item);
        let data = {
            product_id: item.product_id
        };
        console.log('item id to be deleted is', data);
        dispatch({ type: "DELETE_ITEM", payload: data });
    } else {
        console.log('Delete action canceled');
    }
};

      const handleInventory = (event) => {
       event.preventDefault();
       setInventory(event.target.value);
      
      }

     const handlePrice = (event) => {
        event.preventDefault();
        setPrice(event.target.value);
        
     }
     
     const handleSubmit = (item) => {
       console.log('item to be updated is', item);
        let data = {
            inventory_count : inventory || item.inventory_count,
          price: price || item.price,
          product_id: item.product_id,
          
        };
        dispatch({
          type: "PUT_ITEM",
          payload: data,
        });
      };

  

    useEffect(() => {
        dispatch({type:'FETCH_ADMIN'});
      },[dispatch]);

     return (
        <div>
            <h1>Product Management</h1>  
           
            
        <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>                
                <th>Inventory</th>
                <th>New Inventory</th>
                <th>New Price</th>
                           
            </tr>
        </thead>
        <tbody>
            {info.map((item, id) => (
                <tr key={id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>${item.price}</td>
                    <td>{item.inventory_count}</td> 
                   <td><input type="number" placeholder='New Inventory' onChange={handleInventory}/> </td>
                   <td><input type="number" placeholder='New Price' onChange={handlePrice}/> </td>      
                   <td><button onClick={() => handleSubmit( item)}>Update</button></td>
                    <td><button onClick={() => deleteItem(item)}>Delete</button></td>
                           
                    
                </tr>         
                
            ))}
        </tbody>
    </table>
    </div>

    );
}


export default Admin
