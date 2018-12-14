import React from 'react';
import PropTypes from 'prop-types';

const BookRow = (props) => {

    const {book} = props;

    return (
        <tr>
            <th scope="row" key={book.key}>{book.key}</th>
            <td>{book.author}</td>
            <td>{book.title}</td>
        </tr>
    );
};

BookRow.propTypes = {
    book: PropTypes.object.isRequired
};

export default BookRow;
