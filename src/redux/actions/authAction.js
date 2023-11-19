// actions.js
import { registerUserApi } from '../../external/api';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const registerUser = (userData) => async (dispatch) => {
  try {
    const user = await registerUserApi(userData);
    dispatch(registerUserSuccess(user));
    // Redirect to the homepage or dispatch another action to handle navigation
    window.location.href = '/'; // Change this according to your routing setup
  } catch (error) {
    dispatch(registerUserFailure(error.message));
  }
};
