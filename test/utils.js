import { runSaga } from 'redux-saga';

/**
 * Finds and returns nodes by their data-test attribute.
 * @param {ShallowWrapper} wrapper
 * @param {string} value
 * @returns {ShallowWrapper}
 */

export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

/**
 * Returns actions dispatched by the provided saga.
 * @param {Generator} saga
 * @param {Object} initialAction
 * @param {Object} state
 * @returns {Promise<[]>}
 */
export const watchSaga = async (saga, initialAction, state = {}) => {
  const dispatched = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => state
    },
    saga,
    initialAction
  ).done;

  return dispatched;
};
