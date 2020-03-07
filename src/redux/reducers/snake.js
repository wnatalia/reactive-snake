import types from 'types/snake';
import directions from 'constants/directions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.GROW:
      return { ...state, body: [...state.body, action.position] };
    case types.RESET:
      return { body: [], direction: directions.TO_RIGHT, position: null };
    case types.SET_POSITION:
      return { ...state, body: action.body, position: action.position };
    case types.SET_DIRECTION:
      return { ...state, direction: action.direction };
    case types.PAUSE:
      return state;
    default:
      return state;
  }
};
