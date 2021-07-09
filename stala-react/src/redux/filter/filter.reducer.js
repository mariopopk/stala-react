const initialState = {
  filter: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state, // Previous state
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
