import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import types from 'types/game';
import './styles.scss';
import Board from 'containers/Board';

const Game = () => {
  const isInitialized = useSelector(state => state.game.isInitialized);
  const dispatch = useDispatch();

  return (
    <div styleName="game">
      {isInitialized && <Board />}
      {!isInitialized && (
        <>
          <h2>Welcome to React Snake, press start to continue</h2>
          <button onClick={() => dispatch({ type: types.START })}>Start</button>
        </>
      )}
    </div>
  );
};

export default Game;
