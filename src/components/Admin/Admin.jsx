import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function Admin() {
    const dispatch = useDispatch();
   const info = useSelector((store) => store.adminReducer.products)
    console.log('info ',info);
  
    

    useEffect(() => {
        dispatch({type:'FETCH_ADMIN'});
      },[]);
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
                <th>Update</th>
                <th>Delete</th>
                <th>Add</th>
               
            </tr>
        </thead>
        <tbody>
            {info.map((item, id) => (
                <tr key={id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>${item.price}</td>
                    <td>{item.inventory_count}</td> 
                    <button>Update</button>
                    <button>Delete</button>
                    <button>Add</button>
                    
                    
                </tr>
               
                
            ))}
        </tbody>
    </table>
    </div>

    );
}


export default Admin;
