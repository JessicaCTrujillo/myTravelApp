import { LOGIN, LOGOUT } from "./Constants";

const initialState = {
  email: ""
};

export const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, email: action.payload };
    case LOGOUT:
      return { ...state, email: "" };
    default:
      return state;
  }
};
