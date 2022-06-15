import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator
} from 'react-native';
import signinStyle from '../Styles/signincss';
import Style from '../Styles/Style'
import { Auth } from 'aws-amplify';
import onSighIn from '../Server/Signin';
const SignIn=({navigation})=>{
  const [mail,setMail]=useState(null);
  const [pass,setPass]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const validateInputs=()=>{
    try {
      if(mail==null || pass==null){
        throw "Empty Fileds"
      }
      onSighIn(mail,pass,loading,setLoading)
    } catch (error) {
      setError(true)
      Alert.alert(error,"fill all fields")
    }
  }
  return (
    <View style={signinStyle.signInContanier} >
        <View style={signinStyle.texts}>
          <Text style={[signinStyle.header,{textAlign:'left'}]}>Welcome To File Share</Text>
          <Text style={signinStyle.subText}>Sign in and connected with us</Text>
        </View>
        <View style={signinStyle.textFields}>
          <TextInput placeholder='Email' 
            placeholderTextColor={error?"red":"black"}
            keyboardType='email-address'
            style={error?Style.errorInput:signinStyle.input}
            onChangeText={(mail)=>setMail(mail)}
            onFocus={()=>setError(false)}
          />
          <TextInput placeholder='Password' 
            keyboardType='visible-password' 
            placeholderTextColor={error?"red":"black"}
            style={error?Style.errorInput:signinStyle.input} 
            onChangeText={(pass)=>setPass(pass)}
          />
          <Text style={signinStyle.forgetpass} onPress={()=>navigation.navigate('forgetpassword')}>
            Forget Password
          </Text>
          <TouchableOpacity style={[signinStyle.btncontainer,{backgroundColor:"white"}]} onPress={validateInputs} >
            <Text style={signinStyle.btnTxt} >{loading? <ActivityIndicator size={30} color="blue"/>:"Login"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signinStyle.btncontainer} onPress={()=>navigation.navigate("SignUp")} >
            <Text style={signinStyle.btnTxt} >Sign Up</Text>
          </TouchableOpacity>
  
        </View>
    </View>
  );
};

export default SignIn;
