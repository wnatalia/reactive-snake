import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'actions/game';
import './styles.scss';
import Board from 'containers/Board';

const Game = () => {
  const isInitialized = useSelector(state => state.game.isInitialized);
  const dimensions = useSelector(state => state.board.dimensions);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (dimensions) {
        dispatch(actions.pause());
      }
    };
  }, []);

  const handleClick = () => {
    dispatch(actions.start());
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
