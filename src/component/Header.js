import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {TOGGLE_ISADDING} from '../redux/ActionCreators';
 class Header extends Component{
       render(){
          return(
            <View style={{flex:1,alignItems:"center",flexDirection:"row",backgroundColor:"blue",justifyContent:"space-around"}}>
                <Text></Text>
                <Text style={{color:"white",fontSize:20}}>Add words</Text>
                <TouchableOpacity onPress={() => this.props.TOGGLE_ISADDING()}>
                  <Text style={{color:"white",fontSize:20}}>+</Text>
                </TouchableOpacity>
            </View>
          );
       }
}
export default connect(null,{TOGGLE_ISADDING})(Header);
