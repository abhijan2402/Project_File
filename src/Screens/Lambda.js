import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { API,Auth } from 'aws-amplify';
const Lambda=()=>{
    return(
        <View style={Style.container}>
            <TouchableOpacity   >
                <Text >Get Data</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Lambda;