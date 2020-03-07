import { combineReducers } from 'redux';
import boardReducer from 'reducers/board';
import counterReducer from 'reducers/counter';
import foodReducer from 'reducers/food';
import gameReducer from 'reducers/game';
import snakeReducer from 'reducers/snake';

export default combineReducers({
  board: boardReducer,
  counter: counterReducer,
  food: foodReducer,
  game: gameReducer,
  snake: snakeReducer
});
