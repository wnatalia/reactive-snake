import types from 'types/game';

export default {
  end: () => ({
    type: types.END
  }),
  pause: () => ({
    type: types.PAUSE
  }),
  restart: () => ({
    type: types.RESTART
  }),
  resume: () => ({
    type: types.RESUME
  }),
  start: () => ({
    type: types.START
  })
};
