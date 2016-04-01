/**
 * Created by whistle ting on 2016/3/29.
 */
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import React from 'react';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)