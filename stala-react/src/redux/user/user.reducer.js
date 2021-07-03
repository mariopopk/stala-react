// {
//   type: "";
//   payload: "";
// }

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
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

export default userReducer;
