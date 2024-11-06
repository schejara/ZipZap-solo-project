const customerInfoReducer = (state = [], action) => {
    switch (action.type) {
      case "SETINFO":
        return action.payload;
      default:
        return state;
    }
  };

  export default customerInfoReducer;