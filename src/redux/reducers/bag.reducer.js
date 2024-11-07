const initialState = {
    items: [],
  };
  
  const bagReducer = (state = initialState, action) => {
    console.log("Current State:", state)
    switch (action.type) {
      case 'ADD_TO_BAG':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
  
      case 'INCREASE_QUANTITY':
        console.log("Increasing quantity for item:", action.payload);
        return {
          ...state,
          items: state.items.map(item =>
            item.product_id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
  
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.product_id === action.payload.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };

        case 'REMOVE_ITEM':
      console.log('Removing item with product_id:', action.payload.id);
      return {
        ...state,
        items: state.items.filter(item => item.product_id !== action.payload.id),
      };

      case 'CLEAR_CART':
        return {
          ...state,
          items: [],
  };

    default:
      return state;
  }
  };
  
  export default bagReducer;
  