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

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css'


const store = configureStore();

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (typeof error.response === 'undefined') {
        toast.error("Unknown Error !!! Try to Reconnect !");
    }
    if (error.response.status === 502) {
        toast.error("BackEnd Dead !!!");
    }
    if (error.response.status === 401) {
        toast.info("Connect !!!");
    }
    return Promise.reject(error)
});

axios.get('/api/books')
    .then(function (response) {
        store.dispatch(loadBooks(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Header/>
                <ToastContainer/>
                <div className="container">
                    <Switch>
                        <Route exact path="/pg/books" component={BookPage}/>
                        <Route render={() => (<div>Page non trouvée !</div>)}/>
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
