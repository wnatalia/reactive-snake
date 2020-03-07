import types from 'types/counter';

export default (state = {}, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};
