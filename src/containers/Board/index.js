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
import MobileButtons from './components/MobileButtons';
import PauseButton from './components/PauseButton';

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
  const isTouchDevice = 'ontouchstart' in document.documentElement;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPaused, isOver, snakeDirection]);

  const handleGameRestart = () => {
    dispatch(gameActions.restart());
  };

  const handleChange = button => {
    const movesVertically =
      snakeDirection === directions.TO_TOP ||
      snakeDirection === directions.TO_BOTTOM;

    let newDirection;
    if (!isOver) {
      if (
        ((button === directions.TO_LEFT || button === directions.TO_RIGHT) &&
          movesVertically) ||
        ((button === directions.TO_TOP || button === directions.TO_BOTTOM) &&
          !movesVertically)
      ) {
        newDirection = button;
      }
      switch (button) {
        case directions.TO_LEFT:
        case directions.TO_RIGHT:
          if (movesVertically) {
            newDirection = button;
          }
          break;
        case directions.TO_TOP:
        case directions.TO_BOTTOM:
          if (!movesVertically) {
            newDirection = button;
          }
          break;
        case 'PAUSE':
          dispatch(gameActions.pause());
          break;
        case 'RESUME':
          dispatch(gameActions.resume());
          break;
      }
      if (newDirection && !isPaused) {
        dispatch(snakeActions.setDirection(newDirection));
      }
    }
  };

  const handleKeyDown = event => {
    let button;
    if (
      event.keyCode === 37 ||
      event.keyCode === 38 ||
      event.keyCode === 39 ||
      event.keyCode === 40 ||
      event.keyCode === 32 ||
      event.keyCode === 19
    ) {
      event.preventDefault();
      switch (event.keyCode) {
        case 37:
          button = directions.TO_LEFT;
          break;
        case 38:
          button = directions.TO_TOP;
          break;
        case 39:
          button = directions.TO_RIGHT;
          break;
        case 40:
          button = directions.TO_BOTTOM;
          break;
        case 32:
        case 19:
          if (isPaused) {
            button = 'RESUME';
          } else {
            button = 'PAUSE';
          }
          break;
        default:
          return null;
      }
    }

    return button ? handleChange(button) : false;
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
        <div styleName="container">
          {deviceType !== 'mobile' && (
            <div styleName="board-info-text">
              Use arrow keys to change direction. Press space to pause.
            </div>
          )}
          <div
            styleName="board-top-wrapper"
            style={{
              width: dimensions.x * cellSize + 4
            }}
          >
            <Counter />
            <PauseButton
              handleChange={handleChange}
              isGamePaused={isPaused}
              isGameOver={isOver}
            />
          </div>
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
        </div>
        {isTouchDevice && (
          <MobileButtons
            handleChange={handleChange}
            isGamePaused={isPaused}
            isGameOver={isOver}
          />
        )}
        {isOver && (
          <div styleName="game-over">
            <h3 styleName="title">You lost</h3>
            <button className="button primary" onClick={handleGameRestart}>
              Restart
            </button>
          </div>
        )}
      </>
    );
  } else {
    return (
      <div styleName="container">
        <Form />
      </div>
    );
  }
};

export default Board;
