// const initialState = {
//     items: [],
      
//   };
  
//   const checkOutReducer = (state = initialState, action) => {
//       switch (action.type) {
//           case 'ADD_TO_CHECK_OUT':
//               return {
//                   ...state,
//                   items: [...state.items, action.payload]
//               };
//           default:
//               return state;
//       }
//   };
//   export default checkOutReducer
  
const initialState = {
    items: [],
};

const checkOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CHECK_OUT':
            return {
                ...state,
                items: action.payload,  // Set items directly from payload
            };
        default:
            return state;
    }
};

export default checkOutReducer;
