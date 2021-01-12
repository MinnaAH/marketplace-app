import * as type from '../types';

const initialState = {
  categories: [],
  loading: false,
  error: null,
}

function categories(state = initialState, action) {
  switch (action.type) {
    case type.GET_CATEGORIES_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload.data
      }
    case type.GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}

export default categories;