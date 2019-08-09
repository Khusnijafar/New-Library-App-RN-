import axios from "axios";
import { AsyncStorage } from 'react-native'


export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post("https://library-app-backend.herokuapp.com/users/login" , data, 
        {
            headers: {
                "authorization": "khusni"
            }
        }). then(res => {
            const token = res.data.result.token
            const id_user = res.data.result.id_user
            const email = res.data.result.email
            const fullname = res.data.result.fullname
            const status = res.data.result.status
            AsyncStorage.setItem('id_user', id_user)
            AsyncStorage.setItem('jwtToken', token)
            AsyncStorage.setItem('email', email)
            AsyncStorage.setItem('fullname', fullname)
            AsyncStorage.setItem('status', status)
        })
    }
}