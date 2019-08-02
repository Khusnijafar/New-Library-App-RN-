import axios from 'axios';

export const loginUser = dataLogin => {
    return {
        type: "LOGIN_USER",
        payload: axios.post("http://192.168.6.196:3001/users/login", dataLogin)
    }
}