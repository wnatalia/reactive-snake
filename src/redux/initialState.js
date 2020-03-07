import directions from 'constants/directions';

const initialState = {
  board: {
    dimensions: null
  },
  counter: 0,
  food: {
    position: null
  },
  game: {
    isInitialized: false,
    isPaused: false,
    isOver: false
  },
  snake: {
    direction: directions.TO_RIGHT,
    body: [],
    position: null
  }
};

export default initialState;
