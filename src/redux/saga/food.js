import { put, select, takeEvery } from 'redux-saga/effects';
import types from 'types/food';
import { generateFoodPosition } from 'helpers/food';
import foodActions from 'actions/food';
import counterActions from 'actions/counter';

const getBoardDimensions = state => state.board.dimensions;
const getSnake = state => state.snake;

export function* handleEating() {
  const boardDimensions = yield select(getBoardDimensions);
  const snake = yield select(getSnake);
  const newFoodPosition = generateFoodPosition(boardDimensions, snake);

  yield put(foodActions.setPosition(newFoodPosition));

  yield put(counterActions.increment());
}

export default function* foodSaga() {
  yield takeEvery(types.SET_AS_EATEN, handleEating);
}
