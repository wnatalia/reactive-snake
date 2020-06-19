import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './index';
import {findByTestAttribute} from '../../../test/utils';

/**
 * Setup function to create ShallowWrapper for Navigation component
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Navigation />);
};

describe('renders correctly', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, 'component-navigation');
    expect(component.length).toBe(1);
  });
  test('renders about link', () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, 'link');
    expect(component.length).toBe(1);
  });
});
