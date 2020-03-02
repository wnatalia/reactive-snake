import { delay, put, select, takeLatest } from 'redux-saga/effects';
import directions from 'constants/directions';
import foodTypes from 'types/food';
import snakeTypes from 'types/snake';

const getDirection = state => state.snake.direction;
const getPosition = state => state.snake.position;
const getFoodPosition = state => state.food.position;

const getNewPosition = (direction, position) => {
  let newX;
  let newY;

  switch (direction) {
    case directions.TO_TOP:
      newY = position.y - 1;
      newX = position.x;
      break;
    case directions.TO_BOTTOM:
      newY = position.y + 1;
      newX = position.x;
      break;
    case directions.TO_LEFT:
      newY = position.y;
      newX = position.x - 1;
      break;
    case directions.TO_RIGHT:
      newY = position.y;
      newX = position.x + 1;
      break;
    default:
      newY = position.y;
      newX = position.x;
  }

  return {
    x: newX,
    y: newY
  };
};

function* handlePositionChange() {
  const position = yield select(getPosition);
  const direction = yield select(getDirection);
  const foodPosition = yield select(getFoodPosition);
  const newPosition = getNewPosition(direction, position);

  if (
    foodPosition &&
    position.x === foodPosition.x &&
    position.y === foodPosition.y
  ) {
    yield put({
      type: foodTypes.SET_AS_EATEN
    });
  }

  // Wait and move again
  yield delay(500);
  yield put({
    type: snakeTypes.SET_SNAKE_POSITION,
    position: newPosition
  });
}

function* handleDirectionChange() {
  const position = yield select(getPosition);
  const direction = yield select(getDirection);
  const newPosition = getNewPosition(direction, position);

  yield put({
    type: snakeTypes.SET_SNAKE_POSITION,
    position: newPosition
  });
}

export default function* snakeSaga() {
  yield takeLatest(snakeTypes.SET_SNAKE_POSITION, handlePositionChange);
  yield takeLatest(snakeTypes.SET_SNAKE_DIRECTION, handleDirectionChange);
}
