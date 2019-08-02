import React, { Component } from 'react';
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input, Button, Icon, Body, Title  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { getBooks } from '../public/redux/action/books'
import Cardbook from './Cardbook'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch(getBooks())
    }

    render() {
        // console.warn(this.props.data);
        return (
                 <Container>
                    <Header noShadow style={{backgroundColor:'teal'}}>
                        <Body>  
                            <Title>Library Book</Title>
                        </Body>
                    </Header>
                        <ScrollView>
                            <View style={{marginTop:20, width:'90%', marginRight: 'auto', marginLeft: 'auto'}}>
                                 <Item rounded style={{marginBottom: 20}}>
                                     <Input placeholder='Search Book'/>
                                 </Item>
                            </View>
                            <View >
                                <Text style={{textAlign: 'center', fontSize:15, color:'rgb(160,82,45)',}}>Anda ingin keluar? </Text>
                                <TouchableOpacity onPress={() =>this.props.navigation.navigate('Login')}><Text style={{textAlign: 'center', fontSize:15}}>klik disini</Text></TouchableOpacity>
                                </View>
                            <Content>
                                <Button rounded iconLeft style={{width: '35%',marginTop: 20, marginBottom: 20, marginRight: 'auto', marginLeft: 'auto', backgroundColor:'teal'}}><Icon name='book' /><Text style={{textAlign: 'center', color:'white'}} onPress={() =>this.props.navigation.navigate('AddBook')}> Donate</Text></Button>
                            </Content>
                              <Cardbook data={this.props.data}/>
                        </ScrollView>
                 </Container>
                )
    }
}

const mapStateToProps = state => {
    return {
        jumlah: state.books.jumlah,
        data: state.books.data,
    }
  
  }
  
export default connect(mapStateToProps)(Home);

