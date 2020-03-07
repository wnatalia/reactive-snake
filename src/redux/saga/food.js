import { put, select, takeEvery } from 'redux-saga/effects';
import types from 'types/food';
import { generateFoodPosition } from 'helpers/food';
import foodActions from 'actions/food';

const getBoardDimensions = state => state.board.dimensions;
const getSnake = state => state.snake;

function* handleEating() {
  const boardDimensions = yield select(getBoardDimensions);
  const snake = yield select(getSnake);
  let newFoodPosition = generateFoodPosition(boardDimensions, snake);

  yield put(foodActions.setPosition(newFoodPosition));

  // todo: add points incrementation;
}

export default function* foodSaga() {
  yield takeEvery(types.SET_AS_EATEN, handleEating);
}
