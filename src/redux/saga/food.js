import { put, select, takeEvery } from 'redux-saga/effects';
import types from 'types/food';
import snakeTypes from 'types/snake';
import { generateFoodPosition } from 'helpers/food';

const getBoardDimensions = state => state.board.dimensions;
const getSnake = state => state.snake;

function* handleEating() {
  const boardDimensions = yield select(getBoardDimensions);
  const snake = yield select(getSnake);
  let newFoodPosition = generateFoodPosition(boardDimensions, snake.position);
  let growingPartPosition;

  if (snake.body.length > 0) {
    growingPartPosition = snake.body[snake.body.length - 1];
  } else {
    growingPartPosition = snake.position;
  }

  yield put({
    type: types.SET_FOOD_POSITION,
    position: newFoodPosition
  });

  yield put({
    type: snakeTypes.GROW,
    position: growingPartPosition
  });

  // todo: add points incrementation;
}

export default function* foodSaga() {
  yield takeEvery(types.SET_AS_EATEN, handleEating);
}
