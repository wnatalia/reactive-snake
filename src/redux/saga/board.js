import { put, takeEvery } from 'redux-saga/effects';
import boardTypes from 'types/board';
import { generateFoodPosition } from 'helpers/food';
import snakeActions from 'actions/snake';
import foodActions from 'actions/food';

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

  yield put(snakeActions.setPosition([], snakePosition));

  yield put(foodActions.setPosition(foodPosition));
}

export default function* boardSaga() {
  yield takeEvery(boardTypes.SAVE_DIMENSIONS, handleSaveDimensions);
}
