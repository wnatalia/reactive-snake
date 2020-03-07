import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Counter = () => {
  const counter = useSelector(state => state.counter);

  return <div styleName="counter">{counter}</div>;
};

export default Counter;
