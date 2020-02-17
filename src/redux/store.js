import { createStore } from 'redux';
import reducer from './reducer';
import initialState from './initialState';

export default createStore(reducer, initialState);
