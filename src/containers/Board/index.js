import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Form } from './containers/Form';
import './styles.scss';
import directions from 'constants/directions';
import Food from '../Food';
import Snake from '../Snake';
import gameActions from 'actions/game';
import snakeActions from 'actions/snake';
import Counter from '../Counter';
import { CELL_SIZE, MOBILE_CELL_SIZE } from 'constants/cells';

const useDeviceType = () => {
  const getDeviceType = () => (window.innerWidth > 768 ? 'desktop' : 'mobile');
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    function handleResize() {
      setDeviceType(getDeviceType());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

const Board = () => {
  const { dimensions, isPaused, isOver, snakeDirection } = useSelector(
    state => ({
      dimensions: state.board.dimensions,
      isPaused: state.game.isPaused,
      isOver: state.game.isOver,
      snakeDirection: state.snake.direction
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const deviceType = useDeviceType();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPaused, isOver, snakeDirection]);

  const handleGameRestart = () => {
    dispatch(gameActions.restart());
  };

  const handleKeyDown = event => {
    const movesVertically =
      snakeDirection === directions.TO_TOP ||
      snakeDirection === directions.TO_BOTTOM;

    let newDirection;
    if (!isOver) {
      switch (event.keyCode) {
        // Arrow left
        case 37:
          if (movesVertically) {
            newDirection = directions.TO_LEFT;
          }
          break;
        // Arrow up
        case 38:
          if (!movesVertically) {
            newDirection = directions.TO_TOP;
          }
          break;
        // Arrow right
        case 39:
          if (movesVertically) {
            newDirection = directions.TO_RIGHT;
          }
          break;
        // Arrow down
        case 40:
          if (!movesVertically) {
            newDirection = directions.TO_BOTTOM;
          }
          break;
        // Space
        case 32:
        // Pause/break key
        // eslint-disable-next-line no-fallthrough
        case 19:
          if (isPaused) {
            dispatch(gameActions.resume());
          } else {
            dispatch(gameActions.pause());
          }
          break;
      }
      if (newDirection && !isPaused) {
        dispatch(snakeActions.setDirection(newDirection));
      }
    }
  };

  if (dimensions) {
    let cellSize;
    if (deviceType === 'mobile') {
      cellSize = MOBILE_CELL_SIZE;
    } else {
      cellSize = CELL_SIZE;
    }

    return (
      <>
        <Counter />
        <div
          styleName={isOver ? 'board over' : 'board'}
          style={{
            width: dimensions.x * cellSize + 4,
            height: dimensions.y * cellSize + 4
          }}
        >
          <Food cellSize={cellSize} />
          <Snake cellSize={cellSize} />
        </div>
        {isOver && (
          <div styleName="game-over">
            <h3 styleName="title">Ooops...</h3>
            <p>You lost</p>
            <button className="button primary" onClick={handleGameRestart}>
              Restart
            </button>
          </div>
        )}
      </>
    );
  } else {
    return <Form />;
  }
};

export default Board;
