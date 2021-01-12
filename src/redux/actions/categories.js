import * as type from '../types';
import axios from 'axios';

export const getCategories = () => ({
    type: type.GET_CATEGORIES_REQUESTED,
  })
  
  export const getCategoriesSuccess = (categories) => ({
    type: type.GET_CATEGORIES_SUCCESS,
    payload: categories,
  })
  
  export const getCategoriesFailure = () => ({
    type: type.GET_CATEGORIES_FAILED
  })

  export function fetchCategories() {
        return async (dispatch) => {
            dispatch(getCategories());

            axios
            .get('categories.json')
            .then(res => {
                dispatch(getCategoriesSuccess(res))
            })
            .catch(() => dispatch(getCategoriesFailure()))
        }
  }