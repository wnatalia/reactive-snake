import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './styles.scss';

const Snake = ({ cellSize }) => {
  const snakePosition = useSelector(state => state.snake.position);
  const body = useSelector(state => state.snake.body);

  if (snakePosition) {
    return (
      <>
        <div
          data-test="component-snake"
          styleName="snake"
          style={{
            width: cellSize,
            height: cellSize,
            transform: `translate(${snakePosition.x *
              cellSize}px, ${snakePosition.y * cellSize}px)`
          }}
        />
        {body.map((part, index) => (
          <div
            key={`x${part.x}y${part.y}i${index}`}
            data-test="component-snake"
            styleName="snake"
            style={{
              width: cellSize,
              height: cellSize,
              transform: `translate(${part.x * cellSize}px, ${part.y *
                cellSize}px)`
            }}
          />
        ))}
      </>
    );
  } else {
    return false;
  }
};

Snake.propTypes = {
  cellSize: PropTypes.number
};

export default Snake;
