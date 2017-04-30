/* eslint global-require: 0 */

import React from 'react';
import { render as renderToDOM } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { Provider } from 'react-redux';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import Root from './Root';
import rootReducer from '../reducers';

if (!window.Promise) {
  window.Promise = Promise;
}

const reduxMiddleware = applyMiddleware(thunk, reduxPackMiddleware);

const enhancer =
  process.env.NODE_ENV === 'development' ?
    compose(reduxMiddleware, ...(window.devToolsExtension ? [window.devToolsExtension()] : [])) :
    reduxMiddleware;

const store = createStore(rootReducer, enhancer);

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
  module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers/index').default));
  module.hot.accept('./Root', () => render(Root));
}
