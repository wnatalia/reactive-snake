import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Snake = () => {
  const snakePosition = useSelector(state => state.snake.position);
  const body = useSelector(state => state.snake.body);

  if (snakePosition) {
    return (
      <>
        <div
          styleName="snake"
          style={{
            transform: `translate(${snakePosition.x * 25}px, ${snakePosition.y *
              25}px)`
          }}
        />
        {body.map((part, index) => (
          <div
            key={`x${part.x}y${part.y}${index}`}
            styleName="snake"
            style={{
              transform: `translate(${part.x * 25}px, ${part.y * 25}px)`
            }}
          />
        ))}
      </>
    );
  } else {
    return false;
  }
};

export default Snake;
