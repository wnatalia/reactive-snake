import { delay, put, select, takeLatest } from 'redux-saga/effects';
import directions from '../../constants/directions';
import snakeTypes from 'types/snake';
import gameTypes from 'types/game';
import foodActions from 'actions/food';
import snakeActions from 'actions/snake';
import gameActions from 'actions/game';
import { checkIfShouldEnd } from 'helpers/game';

const getDirection = state => state.snake.direction;
const getBody = state => state.snake.body;
const getPosition = state => state.snake.position;
const getFoodPosition = state => state.food.position;
const getBoardDimensions = state => state.board.dimensions;

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

const createNewBody = (body, position) => {
  let newBody = [];
  if (body.length > 0) {
    newBody = [position, ...body];
    newBody.pop();
  }

  return newBody;
};

function* handlePositionChange(action) {
  const position = yield select(getPosition);
  const direction = yield select(getDirection);
  const body = yield select(getBody);
  const foodPosition = yield select(getFoodPosition);
  const dimensions = yield select(getBoardDimensions);
  const newPosition = getNewPosition(direction, position);
  let newBody = createNewBody(body, position);
  const end = checkIfShouldEnd(body, position, dimensions);

  if (end) {
    yield put(gameActions.end());
  } else {
    if (action.type !== gameTypes.PAUSE) {
      if (
        foodPosition &&
        position.x === foodPosition.x &&
        position.y === foodPosition.y
      ) {
        yield put(foodActions.setAsEaten());

        let growingPartPosition;

        if (body.length > 0) {
          growingPartPosition = body[body.length - 1];
        } else {
          growingPartPosition = position;
        }

        yield put(snakeActions.grow(growingPartPosition));

        newBody = createNewBody([...body, growingPartPosition], position);
      }

      // Wait and move again
      if (
        action.type !== snakeTypes.SET_DIRECTION &&
        action.type !== gameTypes.RESUME
      ) {
        yield delay(200);
      }
      yield put(snakeActions.setPosition(newBody, newPosition));
    }
  }
}

export default function* snakeSaga() {
  yield takeLatest(
    [
      snakeTypes.SET_POSITION,
      snakeTypes.SET_DIRECTION,
      gameTypes.PAUSE,
      gameTypes.RESUME
    ],
    handlePositionChange
  );
}
