import { combineReducers } from 'redux';

// import all reducers
import auth from './auth'
import users from  './users'
import books from './books'

// combine them
const appReducer = combineReducers({
    auth,
    // users,
    books
})

export default appReducer