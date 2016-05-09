// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import sample from './sample/sample';

// let middleware = [];
// let createStoreWithMiddleware = applyMiddleware.apply(null, middleware);

// export const reducer = combineReducers({
//   sample
// });

// export function createReduxStore(initialState = {}) {
//   if (
//     typeof window === 'object' &&
//     window.app &&
//     window.app.isDebug &&
//     window.devToolsExtension
//   ) {
//     createStoreWithMiddleware = compose(createStoreWithMiddleware, window.devToolsExtension());
//   }
//   return createStoreWithMiddleware(createStore)(reducer, initialState);
// }