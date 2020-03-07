import types from 'types/board';

export default {
  saveDimensions: dimensions => ({
    type: types.SAVE_DIMENSIONS,
    dimensions: dimensions
  })
};
