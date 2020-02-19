import types from 'types/snake';

export default {
  setSnakePosition: position => ({
    type: types.SET_SNAKE_POSITION,
    position: position
  })
};
