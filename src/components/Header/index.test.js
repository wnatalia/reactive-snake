import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttribute } from '../../../test/utils';

/**
 * Default props for Header component
 * @type {{location: {pathname: string}}}
 */
const defaultProps = {
  location: {
    pathname: '/'
  }
};

/**
 * Setup function to create ShallowWrapper for Header component
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = props => {
  return shallow(<Header {...props} />);
};

describe('renders correctly', () => {
  test('renders without error', () => {
    const wrapper = setup(defaultProps);
    const component = findByTestAttribute(wrapper, 'component-header');
    expect(component.length).toBe(1);
  });
  test('renders link when not on homepage', () => {
    const props = {
      location: {
        pathname: '/about'
      }
    };
    const wrapper = setup(props);
    const link = findByTestAttribute(wrapper, 'link');
    expect(link.length).toBe(1);
  });
});
