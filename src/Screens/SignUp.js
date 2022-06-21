import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { Auth } from 'aws-amplify';
import signupcss from '../Styles/signupcss'
import onSignUp from '../Server/Signup';
const SignUp=({navigation})=>{
  const [name,setUserName]=useState(null);
  const [email,setMail]=useState(null);
  const [password,setPass]=useState(null);
  const [phone_number,setNumber]=useState(null);  
  const signUpNavigate=async()=>{
    try {
      const response=await onSignUp(email,name,password,phone_number);
      if(response === 'signedUp'){
        navigation.navigate("confirmEmail",{username:email})
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <View style={signupcss.signupcontainer} >
      <View style={signupcss.texts}>
        <Text style={signupcss.header}>Welcome To File Share</Text>
        <Text style={signupcss.subText}>Sign Up and connected with us</Text>
      </View>
      <View style={signupcss.textFields}>
        <TextInput placeholder='Name' 
          placeholderTextColor={"black"}
          keyboardType='default'
          style={signupcss.input}
          onChangeText={(name)=>setUserName(name)}
        />
        <TextInput placeholder='Email' 
          placeholderTextColor={"black"}
          keyboardType='email-address'
          style={signupcss.input}
          onChangeText={(mail)=>setMail(mail)}
        />
        <TextInput placeholder='Password' 
          keyboardType='visible-password' 
          placeholderTextColor={"black"}
          style={signupcss.input} 
          onChangeText={(pass)=>setPass(pass)}
        />
        <TextInput placeholder='Number' 
          keyboardType='phone-pad' 
          placeholderTextColor={"black"}
          style={signupcss.input} 
          onChangeText={(number)=>setNumber(number)}
        />
        <TouchableOpacity style={[signupcss.btncontainer,{backgroundColor:'white'}]} onPress={signUpNavigate} >
          <Text style={signupcss.btnTxt} >Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[signupcss.btncontainer,{
          position:'absolute',bottom:0,alignSelf:'center'
        }]} onPress={()=>navigation.navigate("SignIn")} >
          <Text style={signupcss.btnTxt} >Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
