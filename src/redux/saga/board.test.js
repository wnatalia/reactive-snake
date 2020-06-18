import { watchSaga } from '../../../test/utils';
import { handleSaveDimensions } from './board';
import boardActions from 'actions/board';
import foodActions from 'actions/food';
import * as foodHelper from '../helpers/food';
import snakeTypes from 'types/snake';

jest.mock('../helpers/food', () => ({
  generateFoodPosition: jest.fn()
}));
const defaultPosition = { x: 1, y: 2 };
foodHelper.generateFoodPosition.mockReturnValue(defaultPosition);

describe('when dimensions were set', () => {
  let dispatched;
  const defaultDimensions = {
    x: 20,
    y: 20
  };
  beforeEach(async () => {
    dispatched = await watchSaga(
      handleSaveDimensions,
      boardActions.saveDimensions(defaultDimensions)
    );
  });
  test('should set food position', async () => {
    expect(dispatched).toContainEqual(foodActions.setPosition(defaultPosition));
  });
  test('should set snake position', async () => {
    const snakeAction = dispatched.filter(
      el => el.type === snakeTypes.SET_POSITION
    );
    expect(snakeAction.length).toBe(1);
  });
  test('snake position should be within the board', () => {
    const snakeAction = dispatched.find(
      el => el.type === snakeTypes.SET_POSITION
    );
    expect(snakeAction.position.x).toBeGreaterThanOrEqual(0);
    expect(snakeAction.position.y).toBeGreaterThanOrEqual(0);
    expect(snakeAction.position.x).toBeLessThan(defaultDimensions.x);
    expect(snakeAction.position.y).toBeLessThan(defaultDimensions.y);
  });
});

describe('dimensions were not set', () => {
  test('should not dispatch any actions', async () => {
    const dispatched = await watchSaga(
      handleSaveDimensions,
      boardActions.saveDimensions()
    );
    expect(dispatched.length).toBe(0);
  });
});
