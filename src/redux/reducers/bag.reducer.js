const initialState = {
  items: [],
    
};

const bagReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BAG':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
};





export default bagReducer




