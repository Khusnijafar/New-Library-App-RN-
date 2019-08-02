import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardItem, Left, Thumbnail, Body, Text, Icon, Button } from 'native-base'

class Cardbook extends Component {
    render() {
        return (
            <>
            {this.props.data.map((item)=>
            //     <Card style={{width:"45%", marginLeft:10, marginBottom: 15,}} key={item.id_book}>
            //         <CardItem cardBody>
            //             <Image source={{uri: item.image}} style={{height: 150, width: null, flex: 1}}/>
            //         </CardItem>
            //         <CardItem>
            //              <Left>  
            //                 <Text>{item.name}</Text>
            //         </Left>
            //     </CardItem>
            //   </Card>
            <Card style={{flex: 0}}>
            <CardItem>
                <Body>
                  <Text style={{textAlign:'center', color: '#2F4F4F', fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
                  <Text note style={{color: '#2F4F4F', fontSize: 14}}>{item.writer}</Text>
                </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: item.image}} style={{height: 370, width: 320, flex: 1}}/>
                <Text>
                  {item.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text style={{color: '#2F4F4F', fontWeight: 'bold', fontSize: 16}}>{item.location}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
              )}
              </>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(Cardbook)