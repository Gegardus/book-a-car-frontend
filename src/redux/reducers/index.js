import { combineReducers } from 'redux';
import authReducer from './auth';
import { reservationsReducer } from './reservations/reservations';

export default combineReducers({
  auth: authReducer,
  reservationsReducer,
});
