export function loadBooks(books) {
    return {
        type: 'LOAD_BOOKS',
        books
    }
}

export function loadBook(book) {
    return {
        type: 'LOAD_BOOK',
        book
    }
}