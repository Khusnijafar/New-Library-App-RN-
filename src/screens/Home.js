import React, { Component } from 'react';
import { AsyncStorage, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Item, Input, Button, Icon, Title, Card, CardItem, Body, Text, View } from 'native-base';
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
                            {this.props.data.map((item)=>
                            <Card style={{flex: 2}} key={item.id_book}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('BookDetail', { bookdetail: item })}>
                                    <CardItem>
                                        <View>
                                            <Body>
                                                <Text style={{textAlign:'center', color: '#2F4F4F', fontWeight: 'bold', fontSize: 20, position: 'relative'}}>{item.title}</Text>
                                                <Text note style={{color: '#2F4F4F', fontSize: 14}}>Writer : {item.writer}</Text>
                                            </Body>
                                        </View>
                                    </CardItem>
                                    <CardItem>
                                            <Body>
                                                <Image source={{uri: item.image}} style={{height: 370, width: 320, flex: 1}}/>
                                            </Body>
                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                            )}
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
