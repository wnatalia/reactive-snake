import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import initialState from './initialState';

let middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({});
  middlewares = [...middlewares, logger];
}

export default createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);
