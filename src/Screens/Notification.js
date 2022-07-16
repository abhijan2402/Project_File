import React, { useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    FlatList,
    Alert,
    Dimensions,
    Image
} from 'react-native';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const Notification = () => {
    const [visible, setVisible] = useState(true)

    if (visible == false) {
        return (
            <View><Text>hey</Text></View>
        )
    }
    else {
        return (
            <View style={{ justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white', width: windowWidth, height: windowHeight }}><Image
                // style={Invitestyles.image1}
                source={require('../Assets/notification-bell.png')}
                style={{ width: 100, height: 100, marginHorizontal: 130, marginTop: -300 }}
            />
                <Text style={{ fontSize: 20, color: 'black', marginHorizontal: 90, marginTop: 20 }}>No Notification yet!!</Text></View>
        )
    }

}
export default Notification;