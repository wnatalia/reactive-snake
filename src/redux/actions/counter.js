import types from 'types/counter';

export default {
  increment: () => ({
    type: types.INCREMENT
  }),
  reset: () => ({
    type: types.RESET
  })
};
