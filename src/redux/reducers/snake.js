import types from 'types/snake';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_SNAKE_POSITION:
      return { ...state, position: action.position };
    case types.SET_SNAKE_DIRECTION:
      return { ...state, direction: action.direction };
    case types.PAUSE:
      return state;
    default:
      return state;
  }
};
