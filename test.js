
import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Platform,
  BackHandler,
  AppState,
  Alert,
} from 'react-native';


// Custom Components
import SplashPage from './content/SplashPage';

export default class App extends Component<{}> {
   constructor() {
        super();
    }

    render() {
        return (
            <SplashPage></SplashPage>
        );
    }
}


