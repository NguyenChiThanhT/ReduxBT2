import React,{Component} from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';
class Main extends Component{
       getWordList(){
           const {myfilter,myarrwords} = this.props;
           if(myfilter==="NEED_PRACTICE") return myarrwords.filter(e =>!e.memorized);
           if(myfilter==="MEMORIZED") return myarrwords.filter(e =>e.memorized);
           return myarrwords;
       }
       render(){
           return(
               <View style={{flex:1}}>
                   <Header />
                   <View style={{flex:10}}>
                       {this.props.myisAdding ? <Form /> : null}
                       <FlatList
                           data = {this.getWordList()}
                           renderItem = {({item}) => <Word mydata={item}/>}
                           keyExtractor={item => item.id.toString()}

                       />
                   </View>
                   <Filter />
               </View>
           );
       }
}
function mapStateToProps(state){
    return {
      myfilter: state.filterStatus,
      myarrwords: state.arrwords,
      myisAdding: state.isAdding
    };
}
export default connect(mapStateToProps)(Main)
