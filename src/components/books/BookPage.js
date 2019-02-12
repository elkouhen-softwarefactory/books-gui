import React, {Component} from 'react';
import {connect} from 'react-redux'
import BookRow from './BookRow';

export class BookPage extends Component {
    render() {

        console.log("BookPage: " + JSON.stringify(this.props));

        return (
            <>
                <h1>Books</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Author</th>
                        <th scope="col">Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.books && this.props.books.map(book => <BookRow key={book.id} book={book}/>)}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = state => {

    //debugger;
    return {
        books: state.bookReducer
    }
};

export default connect(
    mapStateToProps
)(BookPage)