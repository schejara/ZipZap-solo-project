const initialState = {
    items: [],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return {
                ...state,
                items: action.payload,  // Set items directly from payload
            };
        default:
            return state;
    }
};

export default orderReducer;