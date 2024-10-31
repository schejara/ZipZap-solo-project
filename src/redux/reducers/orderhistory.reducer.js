const initialState = {
    items: [],
};

const orderHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER_HISTORY':
            return {
                ...state,
                items: action.payload, 
            };
        default:
            return state;
    }
};

export default orderHistoryReducer;