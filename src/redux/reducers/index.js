import { combineReducers } from 'redux';
import authReducer from './auth';
import carsReducer from './cars';

export default combineReducers({
  auth: authReducer,
  cars: carsReducer,
});
