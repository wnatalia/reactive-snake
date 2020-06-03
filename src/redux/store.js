import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';
import initialState from './initialState';

const sagaMiddleware = createSagaMiddleware();

export let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({});
  middlewares = [...middlewares, logger];
}

export default createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(saga);
