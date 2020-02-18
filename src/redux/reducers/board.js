import types from 'types/board';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SAVE_DIMENSIONS:
      return { ...state, dimensions: action.dimensions };
    default:
      return state;
  }
};
