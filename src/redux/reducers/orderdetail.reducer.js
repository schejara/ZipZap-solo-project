const orderDetail = (state = [], action) => {
    switch (action.type) {
      case "SET_ORDER_DETAIL":
        return action.payload;
      default:
        return state;
    }
  };

  export default orderDetail