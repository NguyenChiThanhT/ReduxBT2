import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Main from './src2/component/Main';
import store from './src2/redux/Store';
export default class App extends Component<Props> {
  render() {
    return(
        <Provider store={store}>
            <Main />
        </Provider>
    );
  }
}
