import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  SET_ERROR,
} from '../types';

const INITIAL_STATE = {
  user: null,
  message: null,
  success: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
    case PROFILE_UPDATE_REQUEST:
      return { ...state, loading: true };

    case PROFILE_SUCCESS:
    case PROFILE_UPDATE_SUCCESS: {
      const { user, message, success } = action.payload;
      return { user, message, success, loading: false };
    }

    case SET_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
