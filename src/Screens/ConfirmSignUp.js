import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Style from '../Styles/Style';
import confirmpasscss from '../Styles/confirmpasscss';
import { Auth } from 'aws-amplify';
const ConfirmSignIn=({route,navigation})=>{
  const { username } = route.params;
  const [code,setCode]=useState(null);
  const confirmEmail=async()=>{
    try {
      // console.log(username,code)
      const response=await Auth.confirmSignUp(username,code)
      console.log(response)
      navigation.navigate('SignIn')
    } catch (error) {
      Alert.alert("Oops",error.message)
    }
}
  const resendConfirmationCode=async()=>{
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Confirmation code send to email");
    } catch (error) {
      Alert.alert("Oops",error.message)
    }
  }
  return (
    <View style={confirmpasscss.confirmpasscontainer} >
       <View style={confirmpasscss.texts}>
          <Text style={[confirmpasscss.header,{textAlign:'left'}]}>
            Confirm you Email
          </Text>
        </View>
      <View style={confirmpasscss.textFields}>
        <TextInput placeholder='Email' 
          value={username}
          placeholderTextColor={"black"}
          keyboardType='email-address'
          style={Style.input}
        />
        <TextInput placeholder='Code...' 
          keyboardType='numeric' 
          placeholderTextColor={"black"}
          style={Style.input} 
          onChangeText={(code)=>setCode(code)}
        />
        <TouchableOpacity style={[Style.btncontainer,{
          backgroundColor:'white'
        }]}>
          <Text style={Style.btnTxt} onPress={confirmEmail} >Confirm Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btncontainer}>
          <Text style={Style.btnTxt} onPress={resendConfirmationCode} >Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmSignIn;
