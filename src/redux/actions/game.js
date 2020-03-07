import types from 'types/game';

export default {
  end: () => ({
    type: types.END
  }),
  pause: () => ({
    type: types.PAUSE
  }),
  resume: () => ({
    type: types.RESUME
  }),
  start: () => ({
    type: types.START
  })
};
