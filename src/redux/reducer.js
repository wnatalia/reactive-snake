import { combineReducers } from 'redux';
import gameReducer from './reducers/game';
import boardReducer from './reducers/board';

export default combineReducers({
  board: boardReducer,
  game: gameReducer
});
