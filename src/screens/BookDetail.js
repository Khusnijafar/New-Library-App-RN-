import React, { Component } from 'react'
import { ImageBackground, ScrollView, Image, AsyncStorage} from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';
import { Thumbnail, H3, View, Text, Toast, Button, Card, CardItem, Left } from 'native-base'
import moment from 'moment'
import modal from 'react-native-modal'
import { connect } from 'react-redux'
import { Overlay } from 'react-native-elements';
import Axios from 'axios'

class BookDetail extends Component {
    constructor(props) {
        super(props)
            this.state = {
                isModalVisible: false,
                id_book: props.navigation.getParam('bookdetail').id_book,
                title: props.navigation.getParam('bookdetail').title,
                image: props.navigation.getParam('bookdetail').image,
                writer: props.navigation.getParam('bookdetail').writer,
                description: props.navigation.getParam('bookdetail').description,
                card_number: null,
                isVisible: false
            }  
            AsyncStorage.getItem('card_number', (error, result) => {
                if (result) {
                  this.setState({
                    card_number: result
                  });
                }
            });        
    }

    handleBorrow = () => {
        let data = {
            card_number: this.state.card_number,
            id_book: this.state.id_book,
            expired_date: moment().add(10, 'days').format('ll'),
            forfeit: 0,
            information: "DIPINJAM",
        }
        console.warn(this.state.card_number);
        
        let headers = {'authorization':'khusni', 'Content-Type': 'application/json', 'x-access-token': `bearer ${AsyncStorage.token}`, 'x-control-user': AsyncStorage.id_user} 

        Axios.post('http://192.168.6.196:3001/loanbooks/', data, {headers})
        .then((response) => {
         console.warn(response);
            Toast.show({
                text: "Borrow Book Success",
                position: "top",
                type: "success",
                duration: 3000
            })
            this.props.history.push('Home')
        })
        .catch((error) => {
            console.warn(error);
            
            Toast.show({
                text: "Borrow Book Failed",
                position: "top",
                type: "danger",
                duration: 3000
            })
        })
    }

    toggleModal = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };
    
    render() {
        console.warn(this.state.card_number);
        
        let book = this.props.navigation.getParam('bookdetail')
        return (
            <ScrollView>
                <ImageBackground source={{ uri: book.image }} style={{width: '100%', height: 250, position: 'relative'}}>
                    <Thumbnail square large source={{ uri: book.image }} style={{ position: 'absolute', bottom: -45, right: 20, borderWidth: 3, borderColor: 'teal', borderRadius: 8 }}/>
                </ImageBackground>
                <View style={{padding: 20}}>
                    <Text>Title : {book.title}</Text>
                    <Text>Writer : {book.writer}</Text>
                </View>
                <Text style={{ color: 'grey', padding: 20}}>{book.description}</Text>
                <Button block primary onPress={() => this.toggleModal()}><Text>Borrow Book</Text></Button>
            <Overlay
                isVisible={this.state.isVisible}
                windowBackgroundColor="rgba(0, 0, 0, .5)"
                overlayBackgroundColor="none"
                width={300}
                height="auto"
            >
            <Card style={{ height: 500 }} style={{ marginTop: -9, marginRight: -9, marginLeft: -9, marginBottom: -9, }}>
                <CardItem>
                    <Left>
                        <Text>{this.state.name}</Text>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: this.state.image }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Text> Title : {this.state.title}</Text>
                </CardItem>
                <CardItem style={{ marginTop: -15, }}>
                    <Text style={{ margin: 0, }}> Tanggal Kembali : {moment().add(10, 'days').calendar()}</Text>
                </CardItem>
                <CardItem>
                    <Button danger onPress={this.toggleModal} style={{ marginLeft: 30 }}><Text> Cancel </Text></Button>
                    <Button primary onPress={this.handleBorrow} style={{ marginLeft: 10 }}><Text> Borrow </Text></Button>
                </CardItem>
          </Card>
          </Overlay>
          </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(BookDetail)
 