const initialState = {
    items: [],
  };
  
  const bagReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_BAG':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
  
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
  
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };

        case 'REMOVE_ITEM':
            return{
                ...state,
                // items: [...state.items, action.payload.product_id], 
                items: state.items.filter(item => item.product_id !== action.payload.product_id),
       
            }
  
      default:
        return state;
    }
  };
  
  export default bagReducer;
  