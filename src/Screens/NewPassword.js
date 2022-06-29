import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import Style from '../Styles/Style';
import newpasscss from '../Styles/newpasscss';
import { Auth } from 'aws-amplify';
const NewPassword=({route,navigation})=>{
    const { username }=route.params;
    const [code,setCode]=useState(null);
    const [newPass,setNewPass]=useState(null);
    const [loading,setLoading]=useState(false)
    const forgetPass=async()=>{
        try {
          if(code==null || newPass==null)
            throw {message:"Please enter all code or password"}
          setLoading(true)
          await Auth.forgotPasswordSubmit(username,code,newPass);
          Alert.alert("Successfully Password changes");
          setLoading(false)
          navigation.navigate("SignIn")  
        } catch (error) {
            Alert.alert("Oops",error.message)
        }
    }
  return (
    <ImageBackground  style={newpasscss.newpasscontainer}
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9nIKoB9xa1bDA5LSttQpyT5m8HWHxLbUMw&usqp=CAU"}} 
        resizeMode="cover"
      >
      <View style={newpasscss.texts}>
        <Text style={newpasscss.header}>New Credentials</Text>
        <Text style={newpasscss.subText}>
          Confirm your email and enter new password
        </Text>
      </View>
      <View>
        <TextInput placeholder='Email' 
          placeholderTextColor={"black"}
          keyboardType='email-address'
          style={Style.input}
          value={username}
        />
        <TextInput placeholder='Confirmation Code' 
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
        <TouchableOpacity style={newpasscss.btncontainer} onPress={forgetPass} >
          <Text style={newpasscss.btnTxt} >
            {loading?<ActivityIndicator size={20} color="blue"/>:"Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground >
  );
};

export default NewPassword;
