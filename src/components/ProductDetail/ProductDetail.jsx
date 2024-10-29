import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function ProductDetail() {
    const productDetail = useSelector((store) => store.productDetailReducer.productDetail);

    const history = useHistory();
    const dispatch = useDispatch();
    
    console.log('product Details', productDetail);
    const { id } = useParams();
    const home = () => {
        history.push('/Home')
    }
    const cart = () => {
        history.push('/ViewBag')
    }

    const addToBag = () => {
        dispatch({ type: 'ADD_TO_BAG', payload: productDetail });
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_PRODUCTS_DETAIL', payload: id });
    }, [dispatch, id]);
    
    
    return (
        <div>
            <h1>This is a ProductDetail Page</h1>
            <button onClick={home}>Home</button>
            <button onClick={cart}>Cart</button>
            <div>
                <h2>{productDetail.name}</h2>
                <img src={productDetail.image_url} alt={productDetail.name} />
                <p>{productDetail.description}</p>
                <p>Price: ${productDetail.price}</p>
                <p>Inventory: {productDetail.inventory_count}</p>
                <button onClick={addToBag}>Add to Bag</button>
            </div>
        </div>
    );


}


export default ProductDetail;
