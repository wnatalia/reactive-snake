import types from 'types/snake';

export default {
  grow: position => ({
    type: types.GROW,
    position: position
  }),
  setSnakeDirection: direction => ({
    type: types.SET_SNAKE_DIRECTION,
    direction: direction
  }),
  setSnakePosition: position => ({
    type: types.SET_SNAKE_POSITION,
    position: position
  })
};
