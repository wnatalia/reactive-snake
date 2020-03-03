import { put, takeEvery } from 'redux-saga/effects';
import boardTypes from 'types/board';
import foodTypes from 'types/food';
import snakeTypes from 'types/snake';
import { generateFoodPosition } from 'helpers/food';

function* handleSaveDimensions(action) {
  const { dimensions } = action;
  const snakePosition = {
    x: Math.ceil(action.dimensions.x / 2) - 1,
    y: Math.ceil(action.dimensions.y / 2) - 1
  };

  let foodPosition = generateFoodPosition(dimensions, {
    body: [],
    position: snakePosition
  });

  yield put({
    type: snakeTypes.SET_SNAKE_POSITION,
    body: [],
    position: snakePosition
  });

  yield put({
    type: foodTypes.SET_FOOD_POSITION,
    position: foodPosition
  });
}

export default function* boardSaga() {
  yield takeEvery(boardTypes.SAVE_DIMENSIONS, handleSaveDimensions);
}
