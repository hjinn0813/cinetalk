// 로그인, 로그아웃 리듀서

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/authActions';

const initialState = {
  isLoggedIn: false,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        error: '',
      };
    default:
      return state;
  }
};

export default authReducer;
