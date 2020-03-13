import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import types from 'types/game';
import './styles.scss';
import Board from 'containers/Board';

const Game = () => {
  const isInitialized = useSelector(state => state.game.isInitialized);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: types.START });
  };

  return (
    <div styleName="game">
      {isInitialized && <Board />}
      {!isInitialized && (
        <>
          <h2 styleName="welcome-title">
            Welcome to
            <span styleName="welcome-title-emphasis"> React Snake</span>.
          </h2>
          <p styleName="welcome-text">Press start to continue...</p>
          <button className="button primary" onClick={handleClick}>
            Start
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
