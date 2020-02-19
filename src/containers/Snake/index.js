import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Snake = () => {
  const snakePosition = useSelector(state => state.snake.position);

  console.log(snakePosition);
  if (snakePosition) {
    return (
      <div
        styleName="snake"
        style={{
          transform: `translate(${snakePosition.x * 25}px, ${snakePosition.y *
            25}px)`
        }}
      />
    );
  } else {
    return false;
  }
};

export default Snake;
