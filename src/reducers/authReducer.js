import {
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_OUT_REQUEST,
  AUTH_SIGN_OUT_SUCCESS,
  SET_ERROR,
} from '../types';

const INITIAL_STATE = {
  login: localStorage.getItem('user'.login) || '',
  id: localStorage.getItem('user'.id) || '',
  message: null,
  isAuth: !!localStorage.getItem('jwtToken'),
  success: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN_REQUEST:
    case AUTH_SIGN_OUT_REQUEST:
      return { ...state, loading: true };

    case AUTH_SIGN_IN_SUCCESS: {
      const { message, success } = action.payload;
      return { message, success, isAuth: true, loading: false };
    }

    case AUTH_SIGN_OUT_SUCCESS: {
      return { ...INITIAL_STATE, isAuth: false };
    }

    case AUTH_SIGN_UP_SUCCESS: {
      const { message, success } = action.payload;
      return { ...state, message, success, loading: false };
    }

    case SET_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
