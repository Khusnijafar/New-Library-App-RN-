import axios from 'axios';

export const loginUser = dataLogin => {
    return {
        type: "LOGIN_USER",
        payload: axios.post("https://library-app-backend.herokuapp.com/users/login", dataLogin)
    }
}