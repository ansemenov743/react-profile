import {
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_UP_REQUEST,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS,
  AUTH_SIGN_OUT_REQUEST,
} from '../types';

export const signInRequest = (data) => ({
  type: AUTH_SIGN_IN_REQUEST,
  payload: data,
});

export const signInSuccess = (data) => ({
  type: AUTH_SIGN_IN_SUCCESS,
  payload: data,
});

export const signUpRequest = (data) => ({
  type: AUTH_SIGN_UP_REQUEST,
  payload: data,
});

export const signUpSuccess = (data) => ({
  type: AUTH_SIGN_UP_SUCCESS,
  payload: data,
});

export const signOutRequest = () => ({
  type: AUTH_SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: AUTH_SIGN_OUT_SUCCESS,
});
