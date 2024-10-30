const initialState = {
    items: [],
};

const orderConfirmationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_ORDER_CONFIRMATION':
            return {
                ...state,
                items: action.payload,  // Set items directly from payload
            };
        default:
            return state;
    }
};

export default orderConfirmationReducer;
