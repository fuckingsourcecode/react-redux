import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './../Tolg/containers/App.jsx';
import configureStore from './../Tolg/stores/configureStore';
const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);