import axios from 'axios'

export const getBooks = (page = 1) => {
    return {
        type: 'GET_BOOK',
        payload: axios.get('http://192.168.6.196:3001/books?page=' + page, {
            headers: {"authorization": "khusni"}
        }) 
    }
}

// export const postBooks = () => {
//     return {
//         type: 'POST_BOOK'
//     }
// }