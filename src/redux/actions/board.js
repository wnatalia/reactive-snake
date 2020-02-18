import types from 'types/snake';

export default {
  saveDimensions: dimensions => ({
    type: types.SAVE_DIMENSIONS,
    dimensions: dimensions
  })
};
