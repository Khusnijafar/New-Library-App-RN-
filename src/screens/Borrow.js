import React, { Component } from 'react'
import moment from 'moment';
import Axios from 'axios';


class Borrow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_book: "",

        }
    }

    borrowBook = async () => {
        let data = {
            id_book: this.state.id_book,
            expired_data: moment().add(10, 'days').format('ll'),
            forfeit: 0,
            information: this.state.information
        }
        let headers = {'authorization':'khusni'}

        Axios.post(`https://library-app-backend.herokuapp.com/loanbooks/${data.id_book}`, data, {headers})
        .then((response) => {
            Toast.show({
                text: "Borrow Book Success",
                position: "top",
                type: "success",
                duration: 3000
            })
            this.props.navigation.navigate('Home')
        })
        .catch((err) => {
            Toast.show({
                text: "Borrow Book Failed",
                position: "top",
                type: "danger",
                duration: 3000
            })
        })
    }

    render() {
        return 
    }
}