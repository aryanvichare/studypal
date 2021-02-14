import {
  USER_AUTH_FAIL,
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_REHYDRATE,
  USER_AUTH_RESET,
  USER_AUTH_LOGOUT,
} from "../constants/userConstants";

export const userAuthReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return { ...state, loading: true };

    case USER_AUTH_SUCCESS:
      return { loading: false, authenticated: true, userInfo: action.payload };

    case USER_AUTH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case USER_AUTH_REHYDRATE:
      return { loading: false, authenticated: true, userInfo: action.payload };

    case USER_AUTH_LOGOUT:
      return { authenticated: false };

    case USER_AUTH_RESET:
      return { authenticated: false };

    default:
      return state;
  }
};
