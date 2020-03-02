import { all } from 'redux-saga/effects';
import snakeSaga from 'saga/snake';

function* saga() {
  yield all([snakeSaga()]);
}

export default saga;
