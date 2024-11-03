const initialState = {
    categoryItem: [],
   
};

const  categoryItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_ITEM':
            console.log('Updating category details with:', action.payload);
          
            return {
                ...state,
                categoryItem: action.payload, 
            };
        default:
            return state;
    }
};
export default  categoryItemReducer