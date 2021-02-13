import axios from "axios";
import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
} from "../constants/userConstants";

import { auth, firestore } from "../../firebase/firebase.config";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST });

    const userRecord = await auth.signInWithEmailAndPassword(email, password);

    dispatch({ type: USER_AUTH_SUCCESS, payload: userRecord });
  } catch (err) {
    dispatch({
      type: USER_AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST });

    const response = await auth.createUserWithEmailAndPassword(email, password);
    response.user.updateProfile({ name });

    const { uid } = response;

    await firestore.collection("users").doc(uid).set({ name, email, uid });

    dispatch({ type: USER_AUTH_SUCCESS, payload: { name, email, uid } });

    dispatch({ type: USER_AUTH_SUCCESS, payload: userRecord });
  } catch (err) {
    dispatch({
      type: USER_AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
