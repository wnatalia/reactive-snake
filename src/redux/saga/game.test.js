import { watchSaga } from '../../../test/utils';
import snakeActions from 'actions/snake';
import counterActions from 'actions/counter';
import boardTypes from 'types/board';
import foodTypes from 'types/food';
import gameActions from 'actions/game';
import { handleRestart } from './game';

describe('on restart', () => {
  let dispatched;
  beforeEach(async () => {
    dispatched = await watchSaga(handleRestart, gameActions.restart(), {});
  });
  test('should reset board dimensions', () => {
    const resetAction = dispatched.find(
      el => el.type === boardTypes.SAVE_DIMENSIONS
    );
    expect(resetAction.dimensions).toBeFalsy();
  });
  test('reset snake', () => {
    expect(dispatched).toContainEqual(snakeActions.reset());
  });
  test('reset food', () => {
    const foodAction = dispatched.find(
      el => el.type === foodTypes.SET_POSITION
    );
    expect(foodAction.position).toBeFalsy();
  });
  test('reset counter', () => {
    expect(dispatched).toContainEqual(counterActions.reset());
  });
});
