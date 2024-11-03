import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './category.css';

function Category() {
    const history = useHistory();
    const categoryList = useSelector((store) => store.categoryReducer);
    console.log('category', categoryList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORY' });
    }, [dispatch]);

    const handleImageClick = (id) => {
        console.log('id is', id);
        history.push(`/CategoryItem/${id}`); // Navigate to the detail page
    };

    return (
        <div className="category-container">
            <h1>What are you Shopping for today?</h1>
            {categoryList.map((item) => (
                <div className="category-item" key={item.id}>
                    <p>{item.category_name}</p>
                    <img
                        src={item.url}
                        alt={item.category_name}

                        onClick={() => handleImageClick(item.category_id)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Category;
