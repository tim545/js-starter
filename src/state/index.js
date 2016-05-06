import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

export const reducer = combineReducers({});

export function createReduxStore(initialState = {}) {
  if (
    typeof window === 'object' &&
    window.app &&
    window.app.isDebug &&
    window.devToolsExtension
  ) {
    createStoreWithMiddleware = compose(createStoreWithMiddleware, window.devToolsExtension());
  }
  return createStoreWithMiddleware(createStore)(reducer, initialState);
}