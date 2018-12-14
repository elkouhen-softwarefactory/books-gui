export default function bookReducer(state = [], action) {

    //debugger;

    switch (action.type) {

        case 'LOAD_BOOK':
            return [...state].concat(Object.assign({}, action.book));
        case 'LOAD_BOOKS':
            return [...action.books];
        default:
            return state
    }
}