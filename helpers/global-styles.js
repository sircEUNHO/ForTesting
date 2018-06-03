import React, { Component } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Platform
} from 'react-native';

import normalize from '../helpers/text-normalize';

const globalStyle = StyleSheet.create({
    splashImage: {
        flex: 1,
        width: null,
        height: null,
    },

    splashPageContainer: {
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    splashPageLogo: {
        height: normalize(90),
        width: normalize(181.95),
    },
    
    loginImage: {
        flex: 1, width: null, height: null,
    },

    loginPageContainer: {
        flex: 12,
        justifyContent: 'center',
        flexDirection: 'column',
    },

    activeevLoginContainer: {
        flex: 12,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'red'
    },

    loginPageLogo: {
        height: normalize(90),
        width: normalize(181.95),
        marginBottom: 15
    },


    menuButton: {
        fontSize: 30,
        color: '#fff',
    },

    menuButtonHolder: {
        padding: 8,
        paddingLeft: 8,
        paddingRight: 8
    },

    navbar: {
        flexDirection: 'row',
        backgroundColor: '#1b6394',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 15
    },

    mainContainer: {
        display: 'flex',
        flex: 12,
        width: null,
        height: null
    },

    drawerBtn: {
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10
    },

    drawerBtnText: {
        color: '#222222'
    },

    modalContainer: {
        flexDirection: 'column',
        padding: 15,
        paddingBottom: 30,
        backgroundColor: 'rgba(34, 34, 34, 0.53)'
    },

    modalBody: {
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'column',
        borderRadius: 2,
        marginBottom: 30,
        // for ios only T-T
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
    },

    modalCloseButton: {
        marginTop: 15,
        padding: 6,
        backgroundColor: '#3a9adb',
        // paddingTop
    },
    modalCloseButtonText: {
        color: 'white',
        textAlign: 'center'
    },

    alertTypeBox: {
        flex: 12,
        // aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#1b6394',
        padding: 8,
        paddingTop: 30,
        paddingBottom: 30,
        marginBottom: 4
    },

    alertLeftBox: {
        marginRight: 8,
    },

    alertRightBox: {
        marginLeft: 8,
    },

    alertTypeBoxText: {
        color: '#1b6394',
        fontSize: normalize(18)
    },

    alertLevelBox: {
        flex: 4,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: 'white',
        padding: 8,
        marginLeft: 8,
        marginRight: 8,
    },

    loginTextInput: {
        ...Platform.select({
          ios: {
            marginTop: 8,
            marginBottom: 8,
            padding: 10,
            fontSize: 18,
            color: '#1b6394',
            backgroundColor: 'rgba(255,255,255,1)',
            borderRadius: 4,
          },
          android: {
            paddingTop: 15,
            paddingBottom: 15,
            fontSize: 18,
            color: 'white'
          },
        }),
    }
});

export default globalStyle;
