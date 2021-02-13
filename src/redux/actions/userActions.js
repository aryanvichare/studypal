import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
} from "../constants/userConstants";

import axios from "axios";
import { auth, firestore } from "../../firebase/firebase.config";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST });

    const userRecord = await auth.signInWithEmailAndPassword(email, password);
    const { displayName } = userRecord.user;

    dispatch({ type: USER_AUTH_SUCCESS, payload: { displayName, email } });
  } catch (error) {
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
    response.user.updateProfile({ displayName: name });

    const { uid } = response;

    await firestore
      .collection("users")
      .doc(email)
      .set({ displayName: name, email: email });

    dispatch({
      type: USER_AUTH_SUCCESS,
      payload: { displayName: name, email, uid },
    });
  } catch (error) {
    dispatch({
      type: USER_AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
