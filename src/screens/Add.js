import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import { Toast } from 'native-base';
import axios from 'axios';

//redux
// import { connect } from "react-redux";
// import { loginUser } from "../public/redux/action/auth";
// import { getUser } from "../public/redux/action/users";

class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            image: "",
            writer: "",
            description: "",
            location: "",
            id_category: ""
        }
    }
    onChangeTextTitle = title => this.setState({ title })
    onChangeTextImage = image => this.setState({ image })
    onChangeTextWriter = writer => this.setState({ writer })
    onChangeTextDescription = description => this.setState({ description })
    onChangeTextLocation = location => this.setState({ location })
    onChangeTextIdCategory = id_category => this.setState({ id_category })


    handleSubmit = () => {
        alert('halo')
       
        let addBooks = {
        title: this.state.title,
        image: this.state.image,
        writer: this.state.writer,
        description: this.state.description,
        location: this.state.location,
        id_category: this.state.id_category,
        }
        let headers = {'authorization':'khusni', 'Content-Type': 'application/json'} 

        axios.post('http://192.168.6.196:3001/books/', addBooks, {headers})
        .then(res => {
        console.log(res);
        Toast.show({
            text: "Buku berhasil ditambahkan",
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
                <Text style={{textAlign:'center', fontSize: 18, paddingTop:20, color:'#2F4F4F',}}>Books are uniquely portable magic, we are happy for receiving your books</Text>
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Title"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextTitle} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Image"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextImage} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Writer"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextWriter} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Description"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextDescription} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Location"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextLocation} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="ID Category"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextIdCategory} />
                <TouchableOpacity style={styles.button} onPress={() => {this.handleSubmit()}}>
                <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                        <View style={styles.signupTextCont}>
                             <Text style={styles.signupText}>Tidak jadi donasi?</Text>
                                <TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')}><Text style={styles.signupButton}> klik disini</Text></TouchableOpacity>
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

export default AddBook
            
const styles = StyleSheet.create({
container : {
backgroundColor:'#FFF0F5',
flex: 1,
alignItems:'center',
justifyContent :'center'
},
inputBox: {
width:300,
backgroundColor:'#A9A9A9',
borderRadius: 15,
paddingHorizontal:16,
fontSize:16,
color:'#ffffff',
marginVertical: 5
},
button: {
width:200,
backgroundColor:'#2F4F4F',
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
color:'#2F4F4F',
fontSize:18
},
signupButton: {
color:'#2F4F4F',
fontSize:18,
fontWeight:'500'
}
});