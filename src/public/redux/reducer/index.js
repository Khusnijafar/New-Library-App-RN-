import { combineReducers } from 'redux';

// import all reducers
// import users from  './users'
import books from './books'

// combine them
const appReducer = combineReducers({
    books
})

export default appReducer