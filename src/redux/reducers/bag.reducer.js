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
  
      default:
        return state;
    }
  };
  
  export default bagReducer;
  