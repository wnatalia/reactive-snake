import types from './types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SAVE:
      return { ...state, board: action.board };
    case types.PAUSE:
      return state;
    default:
      return state;
  }
};
