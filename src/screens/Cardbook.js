import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Card, CardItem, Left, Body, Text, Button, View } from 'native-base'

class Cardbook extends Component {
    render() {
        return (
            <>
            {this.props.data.map((item)=>
            <Card style={{flex: 2}} key={item.id_book}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('BookDetail', {
                  bookdetail: item
                })}>
                  <CardItem>
                    <View>
                      <Body>
                        <Text style={{textAlign:'center', color: '#2F4F4F', fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
                        <Text note style={{color: '#2F4F4F', fontSize: 14}}>Writer: {item.writer}</Text>
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
          </>
        )
    }
}

export default Cardbook