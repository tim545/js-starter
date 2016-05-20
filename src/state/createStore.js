// index.js

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import {api} from '../middleware/api.js';
import {locale} from '../middleware/locale.js';
import {userDetails} from './user/reducers.js';
import {localeMessages} from './locale/reducers.js';

let createStoreWithMiddleware = applyMiddleware.apply(null, [
  api,
  locale,
  thunk
]);

const reducer = combineReducers({
  userDetails: userDetails,
  localeMessages: localeMessages
});

function createReduxStore(initialState = {}) {
  if (
    typeof window === 'object' &&
    window.devToolsExtension
  ) {
    createStoreWithMiddleware = compose(createStoreWithMiddleware, window.devToolsExtension());
  }
  return createStoreWithMiddleware(createStore)(reducer, initialState);
}

export {createReduxStore};
