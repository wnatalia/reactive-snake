import types from 'types/food';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_FOOD_POSITION:
      return { ...state, position: action.position };
    default:
      return state;
  }
};
