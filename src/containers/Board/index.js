import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Form } from './containers/Form';
import './styles.scss';
import directions from 'constants/directions';
import Food from '../Food';
import Snake from '../Snake';
import gameActions from 'actions/game';
import snakeActions from 'actions/snake';
import Counter from '../Counter';

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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPaused, isOver, snakeDirection]);

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
    let grid = [];
    for (let i = 0; i < dimensions.y; i++) {
      for (let j = 0; j < dimensions.x; j++) {
        grid = [
          ...grid,
          <div styleName="cell" key={`x${j}y${i}`}>{`x: ${j}, y: ${i}`}</div>
        ];
      }
    }

    return (
      <>
        <Counter />
        <div
          styleName="board-grid"
          style={{ width: dimensions.x * 25, height: dimensions.y * 25 }}
        >
          {grid}
          <Food />
          <Snake />
        </div>
      </>
    );
  } else {
    return <Form />;
  }
};

export default Board;
