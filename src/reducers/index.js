import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export default reducers;
