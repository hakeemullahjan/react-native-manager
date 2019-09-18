import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDR6_StT-NkV_5huazhDy2uuQnxxxwH1R0',
      authDomain: 'manager-4a5c0.firebaseapp.com',
      databaseURL: 'https://manager-4a5c0.firebaseio.com',
      projectId: 'manager-4a5c0',
      storageBucket: '',
      messagingSenderId: '1071586074951',
      appId: '1:1071586074951:web:d2d3e069bd1ec41a',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
