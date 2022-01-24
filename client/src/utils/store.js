import { createStore } from 'redux';
import { reducer } from './reducers';

// created store.js to replace GlobalState
// this imports 'createStore' from the redux library and calls it below
// this also imports the reducers from 'reduces.js' and passes it into the 'createStore()' function that is exported

export default createStore(reducer);