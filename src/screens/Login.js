import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import { Toast } from 'native-base';
import Logo from '../components/Logo';
import axios from 'axios'

//redux
// import { connect } from "react-redux";
// import { loginUser } from "../public/redux/action/auth";
// import { getUser } from "../public/redux/action/users";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    onChangeTextEmail = email => this.setState({ email })
    onChangeTextPassword = password => this.setState({ password })

    handleSubmit = () => {
        // alert('halo')
       let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email == '' || this.state.password == '') {
            Toast.show({
                text: 'Email or Password is required',
                buttonText: "Okay",
                type: 'danger',
                duration: 3000
            })
        } else if (this.state.email < 6 || this.state.email == "") {
            Toast.show({
                text: 'Invalid email',
                buttonText: "Okay",
                type: 'danger',
                duration: 3000
            })
        } else if (regex.test(this.state.email) === false) {
            Toast.show({
                text: "Incorrect email format",
                buttonText: "Okay",
                type: "danger",
                duration: 3000
            })
        } else {
        Toast.show({
            text: "Login failed",
            position: "top",
            type: "danger",
            duration: 3000
        })
        }
        let dataLogin = {
        email: this.state.email,
        password: this.state.password
        }
        let headers = {'authorization':'khusni', 'Content-Type': 'application/json'} 

        axios.post('http://192.168.6.196:3001/users/login/', dataLogin, {headers})
        .then(res => {
        console.log(res);
        Toast.show({
            text: "Login successful",
            position: "top",
            type: "success",
            duration: 3000
        })
        // this.props.history.push('/login')
        this.props.navigation.navigate('Home')
        })
        .catch(err => console.log(err));
    }
                    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Masuk sebagai tamu?</Text>
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')}><Text style={styles.signupButton}> klik disini!</Text></TouchableOpacity>
                </View>
                <Logo/>
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"
                 placeholderTextColor = "#ffffff" selectionColor="#fff" keyboardType="email-address" onChangeText={this.onChangeTextEmail} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true}placeholderTextColor = "#ffffff" onChangeText={this.onChangeTextPassword} />
                <TouchableOpacity style={styles.button} onPress={() => {this.handleSubmit()}}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                        <View style={styles.signupTextCont}>
                             <Text style={styles.signupText}>Dont have an account yet?</Text>
                                <TouchableOpacity onPress={() =>this.props.navigation.navigate('Register')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
                        </View>
            </View>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       auth: state.auth,
//       users: state.users
//     };
// };

// connect with redux,first param is map and second is component
// export default connect(mapStateToProps)(Login)

export default Login
            
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