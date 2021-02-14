import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_UPLOAD_REQUEST,
  USER_UPLOAD_SUCCESS,
  USER_UPLOAD_FAIL,
  USER_AUTH_REHYDRATE,
  USER_AUTH_LOGOUT,
} from "../constants/userConstants";

import firebase, {
  auth,
  firestore,
  storage,
} from "../../firebase/firebase.config";

const users = firestore.collection("users");
const files = firestore.collection("files");

const getError = (error) =>
  (error.response && error.response.data.message
    ? error.response.data.message
    : error.message) || error;

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST });

    const userRecord = await auth.signInWithEmailAndPassword(email, password);
    const { displayName } = userRecord.user;

    dispatch({ type: USER_AUTH_SUCCESS, payload: { displayName, email } });
  } catch (error) {
    dispatch({
      type: USER_AUTH_FAIL,
      payload: getError(error),
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_AUTH_REQUEST });

    const response = await auth.createUserWithEmailAndPassword(email, password);
    response.user.updateProfile({ displayName: name });

    const { uid } = response;

    await users.doc(email).set({ displayName: name, email: email });

    dispatch({
      type: USER_AUTH_SUCCESS,
      payload: { displayName: name, email, uid },
    });
  } catch (error) {
    dispatch({
      type: USER_AUTH_FAIL,
      payload: getError(error),
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: USER_AUTH_LOGOUT,
  });

  await auth.signOut();
};

export const upload = (file) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPLOAD_REQUEST });
    console.log("upload");

    const fbUser = auth.currentUser;
    if (!fbUser) {
      throw "Not logged in";
    }

    const fileName = file.name;
    if (!fileName) {
      throw "No file";
    }

    const timestamp = new Date().getTime();
    const uploadName = `${timestamp}-${fileName}`;

    const uploadTask = storage
      .ref()
      .child(`files/${fbUser.email}/${uploadName}`)
      .put(file);
    const snapshot = await uploadTask;
    const downloadUrl = await snapshot.ref.getDownloadURL();
    console.log(`downloadUrl: ${downloadUrl}`);

    await files
      .doc(uploadName)
      .set({ owner: fbUser.email, path: downloadUrl, fileName });

    await users.doc(fbUser.email).update({
      files: firebase.firestore.FieldValue.arrayUnion({
        fileName,
        downloadUrl,
        uploadTime: timestamp,
      }),
    });

    dispatch({
      type: USER_UPLOAD_SUCCESS,
      payload: { uploadName, downloadUrl },
    });
  } catch (error) {
    dispatch({
      type: USER_UPLOAD_FAIL,
      payload: getError(error),
    });
  }
};
