import types from './types';

export default {
  saveBoard: board => ({
    type: types.SAVE,
    board: board
  })
};
