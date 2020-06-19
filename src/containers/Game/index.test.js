import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import Game from './index';
import initialState from '../../redux/initialState';
import types from 'types/game';
import { findByTestAttribute } from '../../../test/utils';

/**
 * Setup function for Game component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Game />);
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

test('renders game component', () => {
  const wrapper = setup();
  useSelector.mockImplementation(fn => fn(initialState));
  const component = findByTestAttribute(wrapper, 'component-game');
  expect(component.length).toBe(1);
});

describe('renders without error on uninitialized game', () => {
  let wrapper;
  const state = {
    ...initialState,
    game: {
      isInitialized: false
    }
  };
  beforeEach(() => {
    wrapper = setup();
    useSelector.mockImplementation(fn => fn(state));
  });
  test('shows welcome title', () => {
    const welcomeTitle = findByTestAttribute(wrapper, 'welcome-title');
    expect(welcomeTitle.length).toBe(1);
  });
  test('shows welcome text', () => {
    const welcomeText = findByTestAttribute(wrapper, 'welcome-text');
    expect(welcomeText.length).toBe(1);
  });
  test('shows start button', () => {
    const startButton = findByTestAttribute(wrapper, 'start-button');
    expect(startButton.length).toBe(1);
  });
});

describe('dispatches start action on start button click', () => {
  const state = {
    ...initialState,
    game: {
      isInitialized: false
    }
  };
  let wrapper;
  let startButton;
  let mockedDispatchFn = jest.fn();
  useSelector.mockImplementation(fn => fn(state));
  mockDispatch.mockReturnValue(mockedDispatchFn);

  beforeEach(() => {
    wrapper = setup();
    startButton = findByTestAttribute(wrapper, 'start-button');
  });

  afterEach(() => {
    mockDispatch.mockClear();
  });

  test('dispatches start action', () => {
    startButton.simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith({ type: types.START });
  });
  test('dispatches once', () => {
    startButton.simulate('click');
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
