import types from './types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.START:
      return { ...state, active: true };
    case types.PAUSE:
      return state;
    default:
      return state;
  }
};
