import React, {Component} from 'react';
import {connect} from 'react-redux'
import BookRow from "./BookRow";

export class BookPage extends Component {
    render() {
        
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
                    {this.props.books.map(book => <BookRow key={book.key} book={book}/>)}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = state => {

    //debugger;
    return {
        books: state
    }
};

export default connect(
    mapStateToProps
)(BookPage)