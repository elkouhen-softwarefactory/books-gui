import React from 'react';
import PropTypes from 'prop-types';

const BookRow = (props) => {

    const {book} = props;

    return (
        <tr scope="row" key={book.key}>
            <th>{book.id}</th>
            <td>{book.author}</td>
            <td>{book.title}</td>
        </tr>
    );
};

BookRow.propTypes = {
    book: PropTypes.object.isRequired
};

export default BookRow;
