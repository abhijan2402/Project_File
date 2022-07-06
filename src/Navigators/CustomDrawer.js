import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, Dimensions, StyleSheet } from 'react-native'
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
            <LinearGradient colors={['#F5B707', '#F0FCFF', '#D38E4F']} style={styles.linear}>

                <View style={styles.baseText}>
                    <Text style={styles.txt}>Hi {user},</Text>
                </View>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>

                <View style={styles.last}>
                    <Text style={styles.lastTxt} onPress={() => logOut()}>SignOut</Text>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    linear: {
        height: windowHeight
    },

    baseText: {
        fontFamily: "Cochin",
        height: windowHeight / 15,
        borderBottomWidth: 2,
        justifyContent: 'space-evenly',
        marginBottom: 20,
        backgroundColor: 'lightorange'
    },
    txt: {
        fontSize: 20,
        textAlign: 'left',
        marginHorizontal: 15,
        color: "black",
        justifyContent: 'center'
    },
    last: {
        padding: 25,
        borderTopWidth: 2,
        borderTopColor: 'black',
        color: 'white',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    lastTxt: {
        fontSize: 20,
        fontWeight: '800',
        color: "black",
        justifyContent: 'space-between'
        // marginVertical: 10,
    }

});

export default CustomDrawer