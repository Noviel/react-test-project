// Created by snov on 11.02.2017.
//

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default function(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
}