import React, {Component} from 'react';
import './App.css';

import Header from './components/common/Header'
import BookPage from './components/books/BookPage'

import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <BookPage/>
                </div>
            </>
        );
    }
}

export default App;
