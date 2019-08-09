import axios from 'axios'

export const getBooks = (page = 1) => {
    return {
        type: 'GET_BOOK',
        payload: axios.get('https://library-app-backend.herokuapp.com/books?page=' + page, {
            headers: {"authorization": "khusni"}
        }) 
    }
}

// export const postBooks = () => {
//     return {
//         type: 'POST_BOOK'
//     }
// }