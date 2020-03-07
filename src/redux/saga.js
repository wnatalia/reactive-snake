import { all } from 'redux-saga/effects';
import boardSaga from 'saga/board';
import foodSaga from 'saga/food';
import gameSaga from 'saga/game';
import snakeSaga from 'saga/snake';

function* saga() {
  yield all([boardSaga(), foodSaga(), gameSaga(), snakeSaga()]);
}

export default saga;
