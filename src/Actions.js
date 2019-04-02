import { LOGIN, LOGOUT } from "./Constants";

export const login = email => {
  return {
    type: LOGIN,
    payload: email
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: false
  };
};
