import types from 'types/game';

export default (state = {}, action) => {
  switch (action.type) {
    case types.START:
      return { ...state, isInitialized: true, isOver: false };
    case types.PAUSE:
      return { ...state, isPaused: true };
    case types.RESUME:
      return { ...state, isPaused: false };
    case types.END:
      return { ...state, isOver: true };
    default:
      return state;
  }
};
