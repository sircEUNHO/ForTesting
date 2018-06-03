import React, { Component } from 'react';
import {
  PixelRatio
} from 'react-native';

const pixelRatio = PixelRatio.get();

const normalize = (size) => {
    if (pixelRatio == 1) {
        return size * 1;
    }

    if (pixelRatio == 1.5) {
        return size * 1.08;
    }

    if (pixelRatio == 2) {
        return size * 1.2;
    }

    if (pixelRatio == 3) {
        return size * 1.35;
    }


    if (pixelRatio == 3.5) {
        return size * 1.5;
    }

    if (pixelRatio > 3.5) {
        return size * 1;
    }

    return size * pixelRatio;
}

export default normalize;
