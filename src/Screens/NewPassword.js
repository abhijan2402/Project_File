import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Style from '../Styles/Style';
import newpasscss from '../Styles/newpasscss';
import { Auth } from 'aws-amplify';
const NewPassword=({route,navigation})=>{
    const { username }=route.params;
    const [code,setCode]=useState(null);
    const [newPass,setNewPass]=useState(null);
    const forgetPass=async()=>{
        try {
          await Auth.forgotPasswordSubmit(username,code,newPass);
          Alert.alert("Successfully Password changes");
          navigation.navigate("SignIn")  
        } catch (error) {
            Alert.alert("Oops",error.message)
        }
    }
  return (
    <View style={newpasscss.newpasscontainer} >
      <View style={newpasscss.texts}>
        <Text style={newpasscss.header}>Enter New Password</Text>
      </View>
      <View>
        <TextInput placeholder='Email' 
          placeholderTextColor={"black"}
          keyboardType='email-address'
          style={Style.input}
          value={username}
        />
        <TextInput placeholder='Code...' 
          placeholderTextColor={"black"}
          keyboardType='numeric'
          style={Style.input}
          onChangeText={(code)=>setCode(code)}
        />
        <TextInput placeholder='New Password' 
          placeholderTextColor={"black"}
          keyboardType='visible-password'
          style={Style.input}
          onChangeText={(newPass)=>setNewPass(newPass)}
        />
        <TouchableOpacity style={Style.btncontainer} onPress={forgetPass} >
          <Text style={Style.btnTxt} >Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPassword;
