import React, { Component } from 'react';
import {
  Platform,
  Dimensions
} from 'react-native';

global.IS_IOS = (Platform.OS === 'ios');

let { height, width } = Dimensions.get('window');
global.IS_IPAD = (height / width) > 1.6 ? false : true;

const activeevVariables = {
    mainColor: '#1b6394',
    mainColorLight: '#3a9adb',
    greyColor: '#222222',
    lowColor: '#ffdf00',
    mediumColor: '#ff6b00',
    highColor: '#ed1b24',
    textSize: 16,
    white: '#fff',
    invisible: 'rgba(1,1,1,0)',
    placeholderColor: IS_IOS ? '#1b6394' : '#fff',
    height,
    width,
    IS_IPAD,
};

export default activeevVariables;
