import { combineReducers } from 'redux';
import gameReducer from './reducers/game';
import boardReducer from './reducers/board';
import snakeReducer from './reducers/snake';

export default combineReducers({
  board: boardReducer,
  game: gameReducer,
  snake: snakeReducer
});
