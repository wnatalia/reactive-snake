import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from './containers/Form';
import './styles.scss';
import Snake from '../Snake';

const Board = () => {
  const dimensions = useSelector(state => state.board.dimensions);

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
