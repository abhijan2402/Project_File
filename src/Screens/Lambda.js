import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Style from '../Styles/Style';
import { API,Auth } from 'aws-amplify';
const Lambda=()=>{
    // const getData=async()=>{
    //     const data=await API.get('DemoApi','/demoapi');
    //     console.log(data);
    // }
    const logOut=async()=>{
        try {
          await Auth.signOut();
        } catch (error) {
          console.log("Oops",error.message)
        }
      }
    return(
        <View style={Style.container}>
            <TouchableOpacity style={Style.btncontainer} onPress={()=>logOut()}  >
                <Text style={Style.btnTxt} >Get Data</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Lambda;