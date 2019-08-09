import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import { Toast, Button } from 'native-base';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            image: "",
            writer: "",
            description: "",
            location: "",
            id_category: "",
            photo: null
        }
    }
    onChangeTextTitle = title => this.setState({ title })
    onChangeTextImage = image => this.setState({ image })
    onChangeTextWriter = writer => this.setState({ writer })
    onChangeTextDescription = description => this.setState({ description })
    onChangeTextLocation = location => this.setState({ location })
    onChangeTextIdCategory = id_category => this.setState({ id_category })

    handleChoosePhoto = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            if(response.uri) {
                this.setState({ photo: response })
            }
        })
    }

    handleSubmit = () => {
        // alert('halo')
        const dataFile = new FormData()
        dataFile.append(this.state.photo)
        dataFile.append('image', 
            {
                uri: this.state.photo.uri,
                type: 'image/jpeg',
                name: 'gambar'
            }
        )
       
        dataFile.append('title', this.state.title)
        dataFile.append('writer', this.state.writer)
        dataFile.append('location', this.state.location)
        dataFile.append('description', this.state.description)
        dataFile.append('id_category', this.state.id_category)
        
        let headers = {'authorization':'khusni', 'Content-Type': 'application/json'} 

        axios.post('https://library-app-backend.herokuapp.com/books/', dataFile, {headers})
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

    chooseFile = () => {
        var options = {
            title: 'Choose Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response)
            if (response.didCancel) {
                console.log('Cancel')
                alert('User cancel upload image')
            } else if (response.error) {
                console.log('ImagePicker Error : ', response.error)
                alert('ImagePicker Error: ' + response.error)
            } else {
                let source = response
                this.setState({
                    photo: source
                })
            }
        })
    }   
                    
    render() {
        return(
            <View style={styles.container}>
                <Text style={{textAlign:'center', fontSize: 18, paddingTop:20, color:'#2F4F4F',}}>Books are uniquely portable magic, we are happy for receiving your books</Text>
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Title"
                 placeholderTextColor = "#ffffff" selectionColor="#fff"  onChangeText={this.onChangeTextTitle} />
                 <Button placeholderTextColor = "#ffffff" onPress={this.chooseFile.bind(this)} style={{width: 300, borderRadius: 10}}><Text> Upload Image</Text></Button>
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