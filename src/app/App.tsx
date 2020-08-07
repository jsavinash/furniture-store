/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {Component} from 'react';
import AppNavigation from '../navigation/app.navigation';
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
