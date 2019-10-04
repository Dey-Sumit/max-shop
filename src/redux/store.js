import {
  createStore,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer.js';

const middleWares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWares) + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;