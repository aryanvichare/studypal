import firebase, {
  firestore
} from "../../firebase/firebase.config";


import { FILE_NLP_FAILED, FILE_NLP_REQUEST, FILE_NLP_SUCCESS, FILE_UPLOAD_FAILED, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS } from '../constants/fileConstants';

const QUIZ_API = 'https://us-central1-studypal-f122c.cloudfunctions.net/triggerSTT?fileId=';

const getError = (error) =>
  (error.response && error.response.data.message
    ? error.response.data.message
    : error.message) || error;


export const processNLP = async (fileUrl) => {
  const file = await firestore.collection('files').doc(fileUrl).get();

  if (file.exists) {
    const result = await file.data();
    if (result.keywords)
      return {'keyWords': result.keywords, 'transcription': result.transcription}
  }

  const url = QUIZ_API + fileUrl;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const requestNLP = (fileUrl) => async (dispatch) => {
  try {
    dispatch({ type: FILE_NLP_REQUEST });
    console.log("nlp");

    if (!fileUrl) {
      throw "No file";
    }

    const data = processNLP(fileUrl);

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
