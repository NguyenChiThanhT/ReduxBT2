import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {memorizedWords,isShowWords} from '../redux/ActionCreators';
class Word extends Component {
      
      render(){
        const {vn,en,memorized,isShow,id} = this.props.mydata;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const Textmemorized = memorized ? 'forget' : 'memorized';
        const meaning = isShow ? vn : '----'
        return(
          <View style={{margin:20,backgroundColor:"pink",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
              <View>
                <Text style={{textDecorationLine}}>{meaning}</Text>
                <Text>{en}</Text>
              </View>
              <TouchableOpacity
                   style={{backgroundColor:"white",margin:10,padding:10}}
                   onPress={()=>{this.props.memorizedWords(id)}}>
                       <Text>{Textmemorized}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                   style={{backgroundColor:"white",margin:10,padding:10}}
                   onPress={() =>{this.props.isShowWords(id)}}>
                       <Text>show</Text>
              </TouchableOpacity>
          </View>
        );
      }


}
export default connect(null,{memorizedWords,isShowWords})(Word);
