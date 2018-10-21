import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Main from './src/component/Main';
import store from './src/redux/Store';
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
  }
}
