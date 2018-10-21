import React,{Component} from 'react';
import {View,Text,ActivityIndicator,StyleSheet} from 'react-native';
import {fetchPeople} from '../redux/peopleAction';
import {connect} from 'react-redux';
import ListPeople from './ListPeople';
class Main extends Component{

       render(){
         const{people,errorMessage,isFetching}= this.props;
         console.log(this.props.people);
           let content =  <ListPeople people = {people}/>;
           if(isFetching){
             content = <ActivityIndicator size="large" />;
           }
           return(
              <View style={styles.container}>
                 {content}
              </View>
           );
       }
       componentWillMount(){
          this.props.fetchPeople();
       }
       componentDidMount(){

       }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
function mapStateToProps(state){
     return{
       people: state.people,
       errorMessage:state.errorMessage,
       isFetching:state.isFetching
     }
}
export default connect(mapStateToProps,{fetchPeople})(Main);
