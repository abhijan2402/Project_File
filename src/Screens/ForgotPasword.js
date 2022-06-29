import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground
} from 'react-native';
import { Auth } from 'aws-amplify';
import forgotpasscss from '../Styles/forgotpasscss';
import Style from '../Styles/Style'
const ForgotPassword=({navigation})=>{
    const [mail,setMail]=useState(null)
    const forgetPass=async()=>{
        try {
          await Auth.forgotPassword(mail);
          navigation.navigate("newPassword",{username:mail})  
        } catch (error) {
            Alert.alert("Oops",error.message)
        }
    }
  return (
    <ImageBackground  style={forgotpasscss.forgetpasscontainer}
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9nIKoB9xa1bDA5LSttQpyT5m8HWHxLbUMw&usqp=CAU"}} 
        resizeMode="cover"
    >
      <View style={forgotpasscss.forgetpasscontainer} >
        <View style={forgotpasscss.texts}>
          <Text style={Style.header}>Forgot Password</Text>
          <Text style={Style.subText}>
            Enter you Email and a code has been send to your mail..
          </Text>
        </View>
        <View style={forgotpasscss.textFields}>
          <TextInput placeholder='Email' 
            placeholderTextColor={"black"}
            keyboardType='email-address'
            style={Style.input}
            onChangeText={(mail)=>setMail(mail)}
          />
          <TouchableOpacity style={Style.btncontainer} onPress={forgetPass} >
            <Text style={Style.btnTxt} >Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ForgotPassword;
