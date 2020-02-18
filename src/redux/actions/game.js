import types from 'types/game';

export default {
  pause: () => ({
    type: types.PAUSE
  }),
  start: () => ({
    type: types.START
  })
};
