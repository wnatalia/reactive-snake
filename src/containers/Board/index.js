import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Form } from './containers/Form';
import './styles.scss';
import Snake from '../Snake';
import types from 'types/snake';

const Board = () => {
  const { dimensions, snakeDirection } = useSelector(
    state => ({
      dimensions: state.board.dimensions,
      snakeDirection: state.snake.direction
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [snakeDirection]);

  const handleKeyDown = event => {
    const movesVertically =
      snakeDirection === 'TO_TOP' || snakeDirection === 'TO_BOTTOM';

    let newDirection;
    switch (event.keyCode) {
      case 37:
        if (movesVertically) {
          newDirection = 'TO_LEFT';
        }
        break;
      case 38:
        if (!movesVertically) {
          newDirection = 'TO_TOP';
        }
        break;
      case 39:
        if (movesVertically) {
          newDirection = 'TO_RIGHT';
        }
        break;
      case 40:
        if (!movesVertically) {
          newDirection = 'TO_BOTTOM';
        }
        break;
    }
    if (newDirection) {
      dispatch({ type: types.SET_SNAKE_DIRECTION, direction: newDirection });
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
      <div
        styleName="board-grid"
        style={{ width: dimensions.x * 25, height: dimensions.y * 25 }}
      >
        {grid}
        <Snake />
      </div>
    );
  } else {
    return <Form />;
  }
};

export default Board;
