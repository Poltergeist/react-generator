import React from 'react';
import ReactDom from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as reducers from './reducers/index';

import Generator from './components/generator.react.js';

const reducer = combineReducers(reducers),
  createStoreWithMiddleware = applyMiddleware(thunk)(createStore),
  store = createStoreWithMiddleware(reducer);

ReactDom.render(
  <Provider store={store}>
    <Generator />
  </Provider>,
  document.querySelector('.main-container')
);
