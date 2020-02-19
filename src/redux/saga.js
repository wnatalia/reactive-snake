import { all } from 'redux-saga/effects';
import boardSaga from 'saga/board';

function* saga() {
  yield all([boardSaga()]);
}

export default saga;
