import { firestore } from "../../firebase/firebase.config";

const guides = firestore.collection("guides");

const getError = error => (
  error.response && error.response.data.message
? error.response.data.message
: error.message) || error

export const loadGuides = () => async dispatch => {
  try {
    dispatch({ type: 'GUIDES_REQUEST'});

    const allGuidesQuery = await guides.limit(10).get();
    const allGuides = [];
    allGuidesQuery.forEach(item => {
      allGuides.push({...item.data(), id: item.id})
    });
    dispatch({ type: 'GUIDES_SUCCESS', payload: allGuides});
  } catch (error) {
    dispatch({
      type: 'GUIDES_FAILED',
      payload: getError(error)
    })
  }
};
