import { put, takeEvery } from 'redux-saga/effects';
import boardTypes from 'types/board';
import snakeTypes from 'types/snake';

function* handleSaveDimensions(action) {
  console.log(action.dimensions.x);
  const x = Math.ceil(action.dimensions.x / 2) - 1;
  const y = Math.ceil(action.dimensions.y / 2) - 1;
  yield console.log(x);
  yield console.log(y);
  yield put({ type: snakeTypes.SET_SNAKE_POSITION, position: { x, y } });
}

export default function* boardSaga() {
  yield takeEvery(boardTypes.SAVE_DIMENSIONS, handleSaveDimensions);
}
