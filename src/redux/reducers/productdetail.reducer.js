const initialState = {
    productDetail: {},
    // other state properties
};

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS_DETAIL':
            console.log('Updating product details with:', action.payload);
            // handle fetching logic
            return {
                ...state,
                productDetail: action.payload, // Make sure this is structured correctly
            };
        default:
            return state;
    }
};
export default productDetailReducer