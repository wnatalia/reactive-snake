import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Food = () => {
  const foodPosition = useSelector(state => state.food.position);

  if (foodPosition) {
    return (
      <div
        styleName="food"
        style={{
          transform: `translate(${foodPosition.x * 25}px, ${foodPosition.y *
            25}px)`
        }}
      />
    );
  } else {
    return false;
  }
};

export default Food;
