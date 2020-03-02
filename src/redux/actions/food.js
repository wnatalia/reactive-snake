import types from 'types/food';

export default {
  savePosition: position => ({
    type: types.SET_FOOD_POSITION,
    position: position
  })
};
