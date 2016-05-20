
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {IntlProvider, addLocaleData} from 'react-intl';

import {App} from './components/app.jsx';
import {UserDetailsContainer} from './containers/userDetailsContainer.js';
import {ChangeDetails} from './components/user/changeDetails.jsx';
import {NotFound} from './components/misc/notFound.jsx';

// i18n
import es from 'react-intl/locale-data/es';
addLocaleData([...es]);

// Browser locale
const locale = (window.navigator.userLanguage || window.navigator.language).split('-')[0];
document.documentElement.lang = locale;

const renderApp = (store)=> {
  render(
    <Provider store={store}>
      <IntlProvider locale={locale}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={UserDetailsContainer} />
            <Route path="dashboard" component={UserDetailsContainer} />
            <Route path="request" component={ChangeDetails} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </IntlProvider>
    </Provider>,
    document.getElementById('app')
  );
};

export {renderApp};
