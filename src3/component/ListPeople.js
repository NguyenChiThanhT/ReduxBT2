import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
export default class ListPeople extends Component {
       render(){
           return(
             <View style={{flex:1,margin:20}}>
                 <FlatList
                    data = {this.props.people}
                    renderItem = {({item}) =><Text>{item.phone}</Text>}
                    keyExtractor={item =>item.cell.toString()}
                 />
             </View>
           );
       }
}
