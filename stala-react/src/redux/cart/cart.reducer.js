const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state, // Previous state
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
