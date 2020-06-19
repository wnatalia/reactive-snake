import gameActions from 'actions/game';
import snakeActions from 'actions/snake';
import gameTypes from 'types/game';
import foodTypes from 'types/food';
import snakeTypes from 'types/snake';
import directions from '../../constants/directions';
import { getNewPosition, handlePositionChange } from './snake';
import { watchSaga } from '../../../test/utils';

const defaultState = {
  board: {
    dimensions: {
      x: 20,
      y: 20
    }
  },
  food: {
    position: {
      x: 15,
      y: 15
    }
  },
  game: {
    isInitialized: false,
    isPaused: false,
    isOver: false
  },
  snake: {
    direction: directions.TO_RIGHT,
    body: [],
    position: {
      x: 2,
      y: 2
    }
  }
};

describe('sets new position correctly', () => {
  const position = { x: 5, y: 5 };
  test('on movement to the right', () => {
    const newPosition = getNewPosition(directions.TO_RIGHT, position);
    expect(newPosition).toEqual({ x: 6, y: 5 });
  });
  test('on movement to the left', () => {
    const newPosition = getNewPosition(directions.TO_LEFT, position);
    expect(newPosition).toEqual({ x: 4, y: 5 });
  });
  test('on movement to the top', () => {
    const newPosition = getNewPosition(directions.TO_TOP, position);
    expect(newPosition).toEqual({ x: 5, y: 4 });
  });
  test('on movement to the bottom', () => {
    const newPosition = getNewPosition(directions.TO_BOTTOM, position);
    expect(newPosition).toEqual({ x: 5, y: 6 });
  });
  test('does not move if direction was not provided', () => {
    const newPosition = getNewPosition(null, position);
    expect(newPosition).toEqual(position);
  });
});

test('should not dispatch any actions on pause', async () => {
  const dispatched = await watchSaga(
    handlePositionChange,
    gameActions.pause(),
    defaultState
  );
  expect(dispatched.length).toBe(0);
});

describe('on move that ends game', () => {
  let dispatched;
  beforeEach(async () => {
    dispatched = await watchSaga(
      handlePositionChange,
      snakeActions.setPosition(),
      {
        ...defaultState,
        snake: {
          ...defaultState.snake,
          position: {
            x: 21, // exceeds the dimensions
            y: 5
          }
        }
      }
    );
  });
  test('should dispatch just one action', async () => {
    expect(dispatched.length).toBe(1);
  });
  test('should dispatch end action', () => {
    expect(dispatched[0].type).toBe(gameTypes.END);
  });
});

describe('when snake is at the same position as food', () => {
  let dispatched;
  const position = { x: 5, y: 5 };
  beforeEach(async () => {
    dispatched = await watchSaga(
      handlePositionChange,
      snakeActions.setPosition(),
      {
        ...defaultState,
        snake: {
          ...defaultState.snake,
          position
        },
        food: {
          position
        }
      }
    );
  });
  test('should set food as eaten', () => {
    const eatingAction = dispatched.filter(
      el => el.type === foodTypes.SET_AS_EATEN
    );
    expect(eatingAction.length).toBe(1);
  });
  test('should make the snake grow', () => {
    const growingAction = dispatched.filter(el => el.type === snakeTypes.GROW);
    expect(growingAction.length).toBe(1);
  });
});