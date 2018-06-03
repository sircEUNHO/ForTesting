import React, { Component } from 'react';
import {
  PixelRatio,
  StyleSheet,
} from 'react-native';


const mapstyle = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#134669"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "weight": 3.5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#3a9adb"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "weight": 4
      }
    ]
  }
];

export default mapstyle;
