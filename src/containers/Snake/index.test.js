import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import Snake from './index';
import initialState from '../../redux/initialState';
import { findByTestAttribute } from '../../../test/utils';

/**
 * Setup function for Snake component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Snake />);
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('renders without error', () => {
  test('renders nothing when snakePosition is not set', () => {
    const state = {
      ...initialState,
      snake: {
        position: null
      }
    };
    useSelector.mockImplementation(fn => fn(state));
    const wrapper = setup();
    expect(wrapper.isEmptyRender()).toBe(true);
  });
  test('renders single snake element when only snakePosition is set', () => {
    const state = {
      ...initialState,
      snake: {
        position: {
          x: 5,
          y: 6
        },
        body: []
      }
    };
    useSelector.mockImplementation(fn => fn(state));
    const wrapper = setup();
    const snake = findByTestAttribute(wrapper, 'component-snake');
    expect(snake.length).toBe(1);
  });
  test('renders all snake elements when body is set', () => {
    const state = {
      ...initialState,
      snake: {
        position: {
          x: 5,
          y: 6
        },
        body: [
          {
            x: 6,
            y: 6
          },
          {
            x: 7,
            y: 6
          },
          {
            x: 8,
            y: 6
          }
        ]
      }
    };
    useSelector.mockImplementation(fn => fn(state));
    const wrapper = setup();
    const snake = findByTestAttribute(wrapper, 'component-snake');
    // +1 for the head part
    expect(snake.length).toBe(state.snake.body.length + 1);
  });
});
