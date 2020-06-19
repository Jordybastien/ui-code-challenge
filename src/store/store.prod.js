import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../Reducers';
import thunk from 'redux-thunk';

export default () => {
  return createStore(combineReducers, applyMiddleware(thunk));
};
