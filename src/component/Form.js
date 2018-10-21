import React,{Component} from 'react';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import {connect} from 'react-redux';
import {ADD_WORD,TOGGLE_ISADDING} from '../redux/ActionCreators';
 class Form extends Component{
      constructor(props){
        super(props);
        this.state={
          en:"",
          vn:""
        }
        this.onAdd =this.onAdd.bind(this);
      }
      onAdd(){
         const{en,vn} = this.state;
         this.props.ADD_WORD(en,vn);
         this.props.TOGGLE_ISADDING();
      }
      render(){
        return(
            <View style={{backgroundColor:"green"}}>
               <TextInput
                   style={{height:50,backgroundColor:"#a48662",textAlign:"center",margin:10,color:"white"}}
                   value= {this.state.en}
                   onChangeText={text =>this.setState({en:text})}
                   placeholder="English word"
                   placeholderTextColor="white"
               />
               <TextInput
                   style={{height:50,textAlign:"center",backgroundColor:"#a48662",margin:10}}
                   value= {this.state.vn}
                   onChangeText={text =>this.setState({vn:text})}
                   placeholder="Meaning"
                   placeholderTextColor="white"
               />
               <TouchableOpacity onPress={this.onAdd}>
                    <Text style={{color:"white",textAlign:"center",fontSize:20}}>Add</Text>
               </TouchableOpacity>
            </View>
        );
      }
}
export default connect(null,{TOGGLE_ISADDING,ADD_WORD})(Form);
