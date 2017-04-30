import React from 'react';
import { render as renderToDOM } from 'react-dom';
//import { AppContainer } from 'react-hot-loader';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
//import rootReducer from '../reducers';

//const store = createStore(rootReducer);
import Input from "../../../dist/es/Input/containers/InputContainer"

const Application =
    <div>
        <Input/>
    </div>;

const render = Component =>
    renderToDOM(
        <Component />,
        document.getElementById('root'),
    );

render(Application);

//if (module.hot) {
//    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers/index').default));
//    module.hot.accept('./Application', () => render(Application));
//}
