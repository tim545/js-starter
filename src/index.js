// index.js

import {createReduxStore} from './state/createStore.js';
import {getLocaleMessages} from './state/locale/actions.js';
import {getUser} from './state/user/actions.js';
import {renderApp} from './render.jsx';

const store = createReduxStore();

const init = ()=> {
  document.getElementById('overlay').className = 'overlay-hide';
  renderApp(store);
};

const isReady = ()=> {
  const state = store.getState();
  if (Object.keys(state.userDetails.data).length > 0 && Object.keys(state.localeMessages.data).length > 0) {
    init();
  }
};

store.dispatch(getUser());
store.dispatch(getLocaleMessages());

// Render only once initial data is ready
store.subscribe(isReady);
