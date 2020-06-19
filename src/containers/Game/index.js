import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'actions/game';
import './styles.scss';
import Board from 'containers/Board';

const Game = () => {
  const isInitialized = useSelector(state => state.game.isInitialized);
  const dimensions = useSelector(state => state.board.dimensions);
  const dispatch = useDispatch();

  React.useEffect(() => {
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
    <div styleName="game" data-test="component-game">
      {isInitialized && <Board />}
      {!isInitialized && (
        <>
          <h2 styleName="welcome-title" data-test="welcome-title">
            Welcome to
            <span styleName="welcome-title-emphasis"> Reactive Snake</span>.
          </h2>
          <p styleName="welcome-text" data-test="welcome-text">
            Press start to continue...
          </p>
          <button
            className="button primary"
            data-test="start-button"
            onClick={handleClick}
          >
            Start
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
