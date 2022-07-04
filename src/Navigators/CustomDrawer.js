import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { API, Auth } from 'aws-amplify';
import { color } from 'react-native-reanimated'
const windowHeight = Dimensions.get('window').height
const CustomDrawer = (props) => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        fetchUser();
    },[])
    const fetchUser=async()=>{
        try {
            const authedUser=await Auth.currentAuthenticatedUser();
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
            <ImageBackground style={{ height: windowHeight }}
                source={{ uri: "https://i.pinimg.com/736x/ab/69/b7/ab69b7841c52b26bf257ba93a3fc14a2.jpg" }}
                resizeMode="cover"
            >
                <View style={styles.baseText}>
                    <Text style={styles.txt}>Hi {user},</Text>
                </View>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>

                <View style={styles.last}>
                    <Text style={styles.lastTxt} onPress={() => logOut()}>SignOut</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

    baseText: {
        fontFamily: "Cochin",
        height: windowHeight / 20,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
        marginBottom: 20,
        // backgroundColor: 'orange'
    },
    txt: {
        fontSize: 20,
        textAlign: 'left',
        marginHorizontal: 15,
        color:"black"
    },
    last: {
        padding: 25,
        borderTopWidth: 2,
        borderTopColor: 'black',
        color: 'white'
    },
    lastTxt: {
        fontSize: 17,
        fontWeight: '800',
        color:"black"
    }

});

export default CustomDrawer