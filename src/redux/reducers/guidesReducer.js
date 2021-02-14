

export const guidesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GUIDES_REQUEST':
      return {...state};

    case 'GUIDES_SUCCESS':
      return {...state, guides: action.payload};

    case 'GUIDES_FAILED':
      return {...state, guides: action.payload};

    default:
      return state;
  }
};
