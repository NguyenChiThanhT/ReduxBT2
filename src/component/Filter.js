import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {SHOW_ALLL,SHOW_MEMORIZED,SHOW_NEED_PRACTICE} from '../redux/ActionCreators';
class Filter extends Component {
       getTextStyle(statusName){
         const {myfilter} = this.props;
          if(statusName === myfilter) return {color:"yellow",fontWeight:"bold"}
          return {color:"white"};
       }
       setStyle(actionType){
         this.props.setStyle(actionType)
       }
       render(){
         return(
           <View style={{flex:1,backgroundColor:"red",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                <TouchableOpacity onPress={() =>{this.props.SHOW_ALLL()}}>
                    <Text style={this.getTextStyle("SHOW_ALLL")}>SHOW_ALLL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{this.props.SHOW_MEMORIZED()}}>
                    <Text style={this.getTextStyle("MEMORIZED")}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{this.props.SHOW_NEED_PRACTICE()}}>
                    <Text style={this.getTextStyle("NEED_PRACTICE")}>NEED PRACTICE</Text>
                </TouchableOpacity>
           </View>
         );
       }
}
function mapStateToProps(state){
    return { myfilter: state.filterStatus,};
}
export default connect(mapStateToProps,{SHOW_ALLL,SHOW_MEMORIZED,SHOW_NEED_PRACTICE})(Filter)
