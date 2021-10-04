import React from 'react';
import PropTypes from 'prop-types';
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

Food.propTypes = {
  cellSize: PropTypes.number
};

export default Food;
