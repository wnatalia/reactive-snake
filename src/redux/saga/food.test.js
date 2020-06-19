import { handleEating } from './food';
import foodActions from 'actions/food';
import * as foodHelper from '../helpers/food';
import counterActions from 'actions/counter';
import { watchSaga } from '../../../test/utils';

jest.mock('../helpers/food', () => ({
  generateFoodPosition: jest.fn()
}));
const defaultPosition = { x: 1, y: 2 };
foodHelper.generateFoodPosition.mockReturnValue(defaultPosition);

const defaultState = {
  board: { dimensions: { x: 20, y: 20 } },
  snake: { body: [], position: { x: 2, y: 4 } }
};

test('should set new food position, when food was eaten', async () => {
  const dispatched = await watchSaga(
    handleEating,
    foodActions.setAsEaten(),
    defaultState
  );
  expect(dispatched).toContainEqual(foodActions.setPosition(defaultPosition));
});

test('counter should increment, when food was eaten', async () => {
  const dispatched = await watchSaga(
    handleEating,
    foodActions.setAsEaten(),
    defaultState
  );
  expect(dispatched).toContainEqual(counterActions.increment());
});
