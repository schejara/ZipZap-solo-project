import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ProductDetail() {
    const history = useHistory();
    const home = () => {
        history.push('/Home')
    }
    const cart = () => {
        history.push('/ViewBag')
    }
    return (
        <div>
            <h1>This is a ProductDetail Page</h1>
            <button onClick={home}>Home</button>
            <button onClick={cart}>Cart</button>
        </div>
    );
}


export default ProductDetail;
