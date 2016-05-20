// index.js

import {createReduxStore} from './state/createStore.js';
import {getLocaleMessages} from './state/locale/actions.js';
import {getUser} from './state/user/actions.js';
import {renderApp} from './render.jsx';

const store = createReduxStore();

store.dispatch(getUser());
store.dispatch(getLocaleMessages());

renderApp(store);
