import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function ProductDetail() {
    const productDetail = useSelector((store) => store.productDetailReducer.productDetail);
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    const home = () => {
        history.push('/Home');
    };

    const cart = () => {
        history.push('/ViewBag');
    };

    const addToBag = () => {
        const productWithQuantity = {
            ...productDetail,
            quantity: 1, // Set default quantity to 1
        };
        dispatch({ type: 'ADD_TO_BAG', payload: productWithQuantity });
        history.push('/ViewBag');
    };

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
                
                <button onClick={addToBag}>Add to Bag</button>
            </div>
        </div>
    );
}

export default ProductDetail;
