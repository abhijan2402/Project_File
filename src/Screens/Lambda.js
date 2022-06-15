import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Style from '../Styles/Style';
import { API } from 'aws-amplify';
const Lambda=()=>{
    // const getData=async()=>{
    //     const data=await API.get('DemoApi','/demoapi');
    //     console.log(data);
    // }
    return(
        <View style={Style.container}>
            <TouchableOpacity style={Style.btncontainer}  >
                <Text style={Style.btnTxt} >Get Data</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Lambda;