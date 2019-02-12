import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

export function bookReducer(state = [], action) {

    //debugger;

    switch (action.type) {

        case 'LOAD_BOOK':
            return [...state].concat(Object.assign({}, action.book));
        case 'LOAD_BOOKS':
            if (action.books) {
                return [...action.books];
            } else {
                return state;
            }
        default:
            return state
    }
}

export function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        bookReducer
    });
}