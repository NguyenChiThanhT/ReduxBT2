import React,{Component} from 'react';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import {connect} from 'react-redux';
import * as ActionCreators from '../redux/ActionCreators';
class Main extends Component{
       constructor(props){
            super(props);
            this.state={
              CityName:""
            }
       }
       GetWeatherMessage(){
           const {error,isLoading,CityName,temp} = this.props;
           if(isLoading) return '...Loading';
           if(error) return 'Vui long thu lai';
           if(!CityName) return 'Nhap ten thanh pho cua ban!';
           return `${CityName} hien tai la ${temp} oC`
       }
       GetItemp(){
           const {CityName} = this.state;
          this.props.FetchDataThunk(CityName);
       }
       render(){
           return(
              <View style={{flex:1,backgroundColor:"pink"}}>
                 <View style={{flex:1,margin:50,justifyContent:"center",alignItems:"center"}}>
                     <Text style={{fontSize:20}}>{this.GetWeatherMessage()}</Text>
                 </View>
                 <View style={{flex:1,margin:50,justifyContent:"center",alignItems:"center"}}>
                     <TextInput
                        style={{height:50,backgroundColor:"white",width:"100%",textAlign:"center",color:"red"}}
                        value= {this.state.CityName}
                        placeholder="lay nhiet do"
                        placeholderTextColor="red"
                        onChangeText = {(text) =>this.setState({CityName:text})}
                     />
                     <TouchableOpacity
                          style={{marginTop:20,backgroundColor:"green",padding:10}}
                          onPress={()=>{this.GetItemp()}}
                          >
                            <Text style={{fontSize:20}}>Lay Nhiet Do</Text>
                     </TouchableOpacity>
                 </View>
                 <View style={{flex:1}}>
                 </View>
              </View>
           );
       }
}
function mapStateToProps(state){
     return{
       CityName: state.CityName,
       temp:state.temp,
       isLoading:state.isLoading,
       error:state.error
     };
}
export default connect(mapStateToProps,ActionCreators)(Main);
