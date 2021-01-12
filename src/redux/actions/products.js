import * as type from '../types';
import axios from 'axios';

export const getProducts = () => ({
    type: type.GET_PRODUCTS_REQUESTED,
  })
  
  export const getProductsSuccess = (products) => ({
    type: type.GET_PRODUCTS_SUCCESS,
    payload: products,
  })
  
  export const getProductsFailure = () => ({
    type: type.GET_PRODUCTS_FAILED
  })

  export function fetchProducts() {
        return async (dispatch) => {
            dispatch(getProducts());

            axios
            .get('products.json')
            .then(res => {
                dispatch(getProductsSuccess(res))
            })
            .catch(() => dispatch(getProductsFailure()))
        }
  }