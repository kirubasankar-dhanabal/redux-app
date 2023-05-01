import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxActions from './ReduxActions';

let rootReducer = combineReducers({
    ReduxActions
})

const store = createStore(rootReducer, composeWithDevTools());
  
export default store;