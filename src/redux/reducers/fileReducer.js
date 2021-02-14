import { FILE_NLP_FAILED, FILE_NLP_REQUEST, FILE_NLP_SUCCESS, FILE_UPLOAD_FAILED, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS } from '../constants/fileConstants';

export const fileReducer = (state = { file: null }, action) => {
  switch (action.type) {
    case FILE_UPLOAD_REQUEST:
      return { ...state };

    case FILE_UPLOAD_SUCCESS:
      return { ...state, file: action.payload };

    case FILE_UPLOAD_FAILED:
      return { ...state, file: action.payload };

    case FILE_NLP_REQUEST:
      return { ...state };

    case FILE_NLP_SUCCESS:
      return { ...state, file: action.payload };

    case FILE_NLP_FAILED:
      return { ...state, file: action.payload };

    default:
      return state;
  }
};
