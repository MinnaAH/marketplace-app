import * as type from '../types';
import axios from 'axios';

export const getUsers = () => ({
    type: type.GET_USERS_REQUESTED,
  })
  
  export const getUsersSuccess = (users) => ({
    type: type.GET_USERS_SUCCESS,
    payload: users,
  })
  
  export const getUsersFailure = () => ({
    type: type.GET_USERS_FAILED
  })

  export function fetchUsers() {
        return async (dispatch) => {
            dispatch(getUsers());

            axios
            .get('users.json')
            .then(res => {
                dispatch(getUsersSuccess(res));
            })
            .catch(() => dispatch(getUsersFailure()))
        }
  }