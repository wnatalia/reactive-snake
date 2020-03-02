import { put, select, takeEvery } from 'redux-saga/effects';
import types from 'types/food';
import { generateFoodPosition } from 'helpers/food';

const getBoardDimensions = state => state.board.dimensions;
const getSnakePosition = state => state.snake.position;

function* handleEating() {
  const boardDimensions = yield select(getBoardDimensions);
  const snakePosition = yield select(getSnakePosition);
  let newFoodPosition = generateFoodPosition(boardDimensions, snakePosition);

  yield put({
    type: types.SET_FOOD_POSITION,
    position: newFoodPosition
  });

  // todo: add points incrementation;
}

export default function* foodSaga() {
  yield takeEvery(types.SET_AS_EATEN, handleEating);
}
