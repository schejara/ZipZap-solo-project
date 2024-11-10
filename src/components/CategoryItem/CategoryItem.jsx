import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 
import { useHistory } from "react-router-dom";
import './CategoryItem.css'

function CategoryItem() {
    const { id } = useParams(); 
    const categoryList = useSelector((store) => store.categoryItemReducer.categoryItem);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORY_ITEM', payload: id });
    }, [dispatch, id]);

    const addToBag = (productId) => {
        const categoryWithQuantity = {
            ...categoryList.find(item => item.product_id === productId),
            quantity: 1,
        };

        console.log('items that were selected to be added to the bag is', categoryWithQuantity);
        dispatch({ type: 'ADD_TO_BAG', payload: categoryWithQuantity });
        history.push('/ViewBag');
    };
    

    return (
        <div className="category-container">
           
            {Array.isArray(categoryList) && categoryList.length > 0 ? (
                categoryList.map((item) => (
                    <div key={item.product_id} >
                        <img src={item.image_url} alt={item.name} />
                        <h3 className="name">{item.name}</h3>
                        <p className="description">{item.description}</p>

                        <p className="product-status">
                                <strong>{item.status}</strong>
                            </p>

                        <p className="price">${item.price}</p>
                        <button onClick={() => addToBag(item.product_id)} className="hover-button">Add to Bag</button>
                    </div>
                ))
            ) : (
                <p>No items found in this category.</p>
            )}
        </div>
    );
    
  
   
}

export default CategoryItem;

