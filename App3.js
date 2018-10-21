import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src3/component/Main';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import peopleReducer from './src3/redux/reducers/peopleReducer'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(peopleReducer);
export default class App extends Component<Props> {
  render() {
    return(
        <Provider store={store}>
            <Main />
        </Provider>
    );
  }
}
