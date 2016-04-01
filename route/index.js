/**
 * Created by whistle ting on 2016/3/29.
 */
import {render} from 'react-dom';
import react from 'react';
import React from 'react';
import Hello from './hello';
import World from './world';
import App from './app';
import {Router, Route, browserHistory} from 'react-router';
const router = (<Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path ="hello" component={Hello}/>
        <Route path ="world" component={World}/>
    </Route>
</Router>);

render(
    router,
    document.getElementById('root')
)