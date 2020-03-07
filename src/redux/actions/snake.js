import types from 'types/snake';

export default {
  grow: position => ({
    type: types.GROW,
    position: position
  }),
  reset: () => ({
    type: types.RESET
  }),
  setDirection: direction => ({
    type: types.SET_DIRECTION,
    direction: direction
  }),
  setPosition: (body, position) => ({
    type: types.SET_POSITION,
    body: body,
    position: position
  })
};
