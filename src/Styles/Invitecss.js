import React from 'react'
import { StyleSheet, Dimensions, } from 'react-native';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const Invitestyles = StyleSheet.create({
    whole: {
        marginVertical: 40
    },
    mainview: {
        height: windowHeight,
        // borderWidth: 2
        backgroundColor: 'white'
    },
    linear: {

        height: windowHeight,
    },
    combo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5

    },
    txt1: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
        color: 'black',
        fontFamily: 'serif'
    },
    form: {
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        // margin: 20,
        borderRadius: 7,
        shadowColor: 'black',
        backgroundColor: "white",
        color: "black"
    },
    btn: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        textAlign: 'center',
        backgroundColor: 'darkorange',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth - 40,
        height: 50,
        borderColor: "black",
        elevation: 30,
        shadowColor: 'orange',
        shadowOpacity: 2,
        alignSelf: 'center',
        marginVertical: 15,
        marginHorizontal: 30,
    },
    image: {
        width: 35,
        height: 30,
        marginHorizontal: 5,
    },
    btnTxt: {
        color: 'black',
        fontWeight: '700',
        fontFamily: 'serif'
    },
    image1: {
        width: windowWidth,
        height: 180,
        marginHorizontal: 5,
    },
})

export default Invitestyles;