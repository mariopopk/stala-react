const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state, // Previous state
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
