import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { reservationsReducer } from './reducers/reservations/reservations';

export default createStore(
  rootReducer,
  reservationsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
