import firebase, {
  firestore
} from "../../firebase/firebase.config";

import axios from 'axios';

import { FILE_NLP_FAILED, FILE_NLP_REQUEST, FILE_NLP_SUCCESS, FILE_UPLOAD_FAILED, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS } from '../constants/fileConstants';

const QUIZ_API = 'http://83c97b0044dc.ngrok.io/generatequiz';

const getError = (error) =>
  (error.response && error.response.data.message
    ? error.response.data.message
    : error.message) || error;

export const requestNLP = (fileUrl) => async (dispatch) => {
  try {
    dispatch({ type: FILE_NLP_REQUEST });
    console.log("nlp");

    if (!fileUrl) {
      throw "No file";
    }

    const response = await axios.post(QUIZ_API, fileUrl);
    const data = await response.json();

    dispatch({
      type: FILE_NLP_SUCCESS,
      payload: { data },
    });
  } catch (error) {
    dispatch({
      type: FILE_NLP_FAILED,
      payload: getError(error),
    });
  }
};
