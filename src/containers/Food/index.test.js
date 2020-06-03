import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import Food from './index';
import initialState from '../../redux/initialState';
import {findByTestAttribute} from '../../../test/utils';

/**
 * Setup function for Food component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Food />);
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('renders without error', () => {
  test('renders nothing when foodPosition is not set', () => {
    const state = {
      ...initialState,
      food: {
        position: null
      }
    };
    useSelector.mockImplementation(fn => fn(state));
    const wrapper = setup();
    expect(wrapper.isEmptyRender()).toBe(true);
  });
  test('renders food element when foodPosition is set', () => {
    const state = {
      ...initialState,
      food: {
        position: {
          x: 10,
          y: 12
        }
      }
    };
    useSelector.mockImplementation(fn => fn(state));
    const wrapper = setup();
    const food = findByTestAttribute(wrapper, 'component-food');
    expect(food.length).toBe(1);
  });
});
