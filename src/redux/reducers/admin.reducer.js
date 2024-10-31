const initialState = {
    products:[],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ADMIN":
        return {...state,products:action.payload};
      default:
        return state;
    }
  };

  export default adminReducer