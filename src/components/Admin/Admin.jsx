import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Admin() {
  const dispatch = useDispatch();
  const [editableData, setEditableData] = useState({});
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

  const handleSubmit = (item) => {
    console.log('item to be updated is', item);
    const data = {
      inventory_count: editableData[item.product_id]?.inventory || item.inventory_count,
      price: editableData[item.product_id]?.price || item.price,
      product_id: item.product_id
    };
    dispatch({
      type: "PUT_ITEM",
      payload: data,
    });
    
    // Clear the input fields for that product after submitting the update
    setEditableData((prevData) => ({
      ...prevData,
      [item.product_id]: {
        price: '',  // Reset the new price input field
        inventory: ''  // Reset the new inventory input field
      }
    }));

    console.log('After update:', data);
  };

  const handleInputChange = (e, productId, field) => {
    const value = e.target.value;
    setEditableData((prevData) => ({
      ...prevData,
      [productId]: {
        ...prevData[productId],
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_ADMIN' });
  }, [dispatch]);

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
            <th>New Price</th>
            <th>New Inventory</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => (
            <tr key={item.product_id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.inventory_count}</td> 
             
              <td>
                <input
                  type="number"
                  value={editableData[item.product_id]?.price || ''}
                  placeholder='New Price'
                  onChange={(e) => handleInputChange(e, item.product_id, 'price')}
                />
              </td>  
              <td>
                <input
                  type="number"
                  value={editableData[item.product_id]?.inventory || ''}
                  placeholder='New Inventory'
                  onChange={(e) => handleInputChange(e, item.product_id, 'inventory')}
                />
              </td>      
              <td>
                <button onClick={() => handleSubmit(item)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteItem(item)}>Delete</button>
              </td>
            </tr>         
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
