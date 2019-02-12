import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {configureStore, history} from './configureStore'

import {loadBooks} from './actions/actions'
import Header from './components/common/Header'
import BookPage from './components/books/BookPage'
import './index.css';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css'


const store = configureStore();


axios.get('/books')
    .then(function (response) {
        store.dispatch(loadBooks(response.data));
    });


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/pg/books" component={BookPage}/>
                        <Route render={() => (<div>Page not found</div>)}/>
                    </Switch>
                </div>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
