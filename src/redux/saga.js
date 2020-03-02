import { all } from 'redux-saga/effects';
import boardSaga from 'saga/board';
import foodSaga from 'saga/food';
import snakeSaga from 'saga/snake';

function* saga() {
  yield all([boardSaga(), foodSaga(), snakeSaga()]);
}

export default saga;
