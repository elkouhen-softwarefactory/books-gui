import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as actions from './actions/actions'
import bookReducer from './reducers/bookReducer'

let store = createStore(bookReducer);

store.dispatch(actions.loadBook({
    key: 1,
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert Martin'
}));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
