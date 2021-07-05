import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
} from '../types';

export const profileRequest = () => ({
  type: PROFILE_REQUEST,
});

export const profileSuccess = (data) => ({
  type: PROFILE_SUCCESS,
  payload: data,
});

export const profileUpdateRequest = (data) => ({
  type: PROFILE_UPDATE_REQUEST,
  payload: data,
});

export const profileUpdateSuccess = (data) => ({
  type: PROFILE_UPDATE_SUCCESS,
  payload: data,
});
