import { put, takeLatest } from 'redux-saga/effects';
import boardActions from 'actions/board';
import snakeActions from 'actions/snake';
import foodActions from 'actions/food';
import counterActions from 'actions/counter';

import gameTypes from 'types/game';

function* handleRestart() {
  yield put(boardActions.saveDimensions(null));
  yield put(snakeActions.reset());
  yield put(foodActions.setPosition(null));
  yield put(counterActions.reset());
}

export default function* gameSaga() {
  yield takeLatest(gameTypes.RESTART, handleRestart);
}
