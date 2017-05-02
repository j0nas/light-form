import React from 'react';
import { render as renderToDOM } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './Root';
import rootReducer from '../reducers';

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

const render = Component =>
    renderToDOM(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    );

render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => render(require('./Root').default)); // eslint-disable-line
  module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers/index').default)); // eslint-disable-line
}
