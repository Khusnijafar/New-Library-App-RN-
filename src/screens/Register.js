import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Toast } from 'native-base'
import Logo from '../components/Logo';
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            card_number: '',
            email: '',
            password: ''
        }
    }
    onChangeTextFullname = fullname => this.setState({ fullname })
    onChangeTextCardNumber = card_number => this.setState({ card_number })
    onChangeTextEmail = email => this.setState({ email })
    onChangeTextPassword = password => this.setState({ password })

    handleSubmit = () => {

        //  alert('halo')

        let regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.fullname == '') {
            Toast.show({
                text: 'Name is required',
                buttonText: "Okay",
                duration: 3000
            })
        } else if (this.state.card_number == '') {
            Toast.show({
                text: 'Card Number is required',
                buttonText: "Okay",
                duration: 3000
            })
        } else if (this.state.email == '') {
            Toast.show({
                text: 'Email is required',
                buttonText: "Okay",
                duration: 3000
            })
        } else if (regex.test(this.state.email) === false) {
            Toast.show({
                text: 'Email format is incorrect',
                buttonText: "Okay",
                duration: 3000
            })
        } else if (this.state.password == '') {
            Toast.show({
                text: 'Password is required',
                buttonText: "Okay",
                duration: 3000
            })
        } else  if (
            this.state.fullname != "" &&
            this.state.card_number != "" &&
            this.state.email != "" &&
            this.state.password != ""
        ){
            Toast.show({
                text: 'Registrasi berhasil',
                duration: 3000
            })
        }
        let dataRegister = {
            fullname: this.state.fullname,
            card_number: this.state.card_number,
            email: this.state.email,
            password: this.state.password
            }
            let headers = {'authorization':'khusni', 'Content-Type': 'application/json'} 

            axios.post('http://192.168.6.196:3001/users/register/', dataRegister, {headers})
            .then(res => {
            console.log(res);
            // this.props.history.push('/login')
            this.props.navigation.navigate('Login')
            })
            .catch(err => console.log(err));
    }
    render() {
    return(
        <View style={styles.container}>
            <Logo/>
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Full Name"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextFullname} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Card Number"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextCardNumber} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"
                 placeholderTextColor = "#ffffff" selectionColor="#fff" keyboardType="email-address" onChangeText={this.onChangeTextEmail} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true}  placeholderTextColor = "#ffffff" onChangeText={this.onChangeTextPassword} />
                  <TouchableOpacity style={styles.button}  onPress={() => this.handleSubmit()}>
                  <Text style={styles.buttonText} >Register</Text>
                  </TouchableOpacity>
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Already have an account?</Text>
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
                    </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
container : {
backgroundColor:'#455a64',
flex: 1,
alignItems:'center',
justifyContent :'center'
},
inputBox: {
width:300,
backgroundColor:'rgba(255, 255,255,0.2)',
borderRadius: 25,
paddingHorizontal:16,
fontSize:16,
color:'#ffffff',
marginVertical: 10
},
button: {
width:300,
backgroundColor:'#1c313a',
borderRadius: 25,
marginVertical: 10,
paddingVertical: 13
},
buttonText: {
fontSize:16,
fontWeight:'500',
color:'#ffffff',
textAlign:'center'
},
signupTextCont : {
flexGrow: 1,
alignItems:'flex-end',
justifyContent :'center',
paddingVertical:16,
flexDirection:'row'
},
signupText: {
color:'rgba(255,255,255,0.6)',
fontSize:16
},
signupButton: {
color:'#ffffff',
fontSize:16,
fontWeight:'500'
}
});