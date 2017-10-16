import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootApp from './RootApp';

const target = document.getElementById('app');

/**
 * Renders the main application.
 *
 * @param Component Instance of the RootApp component
 */
const render = (Component: typeof RootApp): void => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    target,
  );
};

// Enable hot module replacement for components
if (module.hot) {
  module.hot.accept('./RootApp', () => {
    const NextRootApp: typeof RootApp = require('./RootApp').default;
    console.log(' Next root app: ', NextRootApp);
    render(RootApp);
  });
}

// Render the application for the first time
render(RootApp);