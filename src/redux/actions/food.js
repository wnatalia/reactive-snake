import types from 'types/food';

export default {
  setAsEaten: () => ({
    type: types.SET_AS_EATEN
  }),
  setPosition: position => ({
    type: types.SET_POSITION,
    position: position
  })
};
