// reducer.js
import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../actions/authAction';

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {

  console.log(state);
  console.log(action)
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
