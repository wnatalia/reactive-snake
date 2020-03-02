import directions from 'constants/directions';

const initialState = {
  board: {
    dimensions: null
  },
  game: {
    isInitialized: false
  },
  snake: {
    direction: directions.TO_RIGHT,
    position: null
  }
};

export default initialState;
