import axios from "axios";

export const getUser = (id) => {
    return {
        type: 'GET_USER',
        payload: axios.get("http://192.168.6.196:3001/users/" + `${id}`)
    }
}