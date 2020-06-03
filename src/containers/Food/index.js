import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Food = ({ cellSize }) => {
  const foodPosition = useSelector(state => state.food.position);

  if (foodPosition) {
    return (
      <div
        data-test="component-food"
        styleName="food"
        style={{
          width: cellSize,
          height: cellSize,
          transform: `translate(${foodPosition.x *
            cellSize}px, ${foodPosition.y * cellSize}px)`
        }}
      />
    );
  } else {
    return false;
  }
};

export default Food;
