import { createStore, applyMiddleware, compose } from 'redux';
import { middlewares } from '../src/redux/store';
import reducer from '../src/redux/reducer';

/**
 * Finds and returns nodes by their data-test attribute.
 * @param {ShallowWrapper} wrapper
 * @param {string} value
 * @returns {ShallowWrapper}
 */

export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
