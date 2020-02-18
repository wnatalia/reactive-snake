import types from 'types/game';

export default (state = {}, action) => {
  switch (action.type) {
    case types.START:
      return { ...state, isInitialized: true };
    case types.PAUSE:
      return state;
    default:
      return state;
  }
};
