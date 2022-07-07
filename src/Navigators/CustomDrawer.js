import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, Dimensions, StyleSheet, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { API, Auth } from 'aws-amplify';
import { color } from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient';
const windowHeight = Dimensions.get('window').height
const CustomDrawer = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetchUser();
    }, [])
    const fetchUser = async () => {
        try {
            const authedUser = await Auth.currentAuthenticatedUser();
            setUser(authedUser.attributes.name)
        } catch (error) {
            console.log(error);
        }
    }
    const logOut = async () => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log("Oops", error.message)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../Assets/test3.jpg')} style={styles.baseText}>
                <Image style={styles.image1}
                    source={require('../Assets/man.png')}></Image>
                <Text style={styles.txt}>Hello {user}</Text>
            </ImageBackground>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.last}>
                <Text style={styles.lastTxt} onPress={() => logOut()}>SignOut</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    linear: {
        height: windowHeight
    },

    baseText: {
        fontFamily: "Cochin",
        height: windowHeight / 5,
        borderBottomWidth: 3,
        justifyContent: 'space-evenly',
        marginBottom: 20,
        backgroundColor: '#ccc9c2'
    },
    txt: {
        fontSize: 20,
        textAlign: 'left',
        marginHorizontal: 15,
        color: "white",
        justifyContent: 'center',

    },
    last: {
        padding: 13,
        marginHorizontal: 10,
        borderTopWidth: 2,
        borderTopColor: 'black',
        color: 'white',
        justifyContent: 'space-between',
        marginBottom: 4,
        // backgroundColor: '#2382e8'
    },
    lastTxt: {
        fontSize: 20,
        fontWeight: '800',
        color: "black",
        justifyContent: 'space-between'
        // marginVertical: 10,
    },
    image1: {
        width: 70,
        height: 70,
        marginHorizontal: 23
    }

});

export default CustomDrawer