import types from './types';

export default {
  pause: () => ({
    type: types.PAUSE
  }),
  start: () => ({
    type: types.START
  })
};
