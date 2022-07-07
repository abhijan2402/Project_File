import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground
} from 'react-native';
import { Auth } from 'aws-amplify';
// import signupcss from '../signupcss/signupcss'
import signupcss from '../Styles/signupcss'
import onSignUp from '../Server/Signup';
const SignUp = ({ navigation }) => {
  const [name, setUserName] = useState(null);
  const [email, setMail] = useState(null);
  const [password, setPass] = useState(null);
  const [phone_number, setNumber] = useState(null);
  const signUpNavigate = async () => {
    try {
      const response = await onSignUp(email, name, password,phone_number);
      // if (response === 'signedUp') {
        navigation.navigate("confirmEmail", { username: email })
      // }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
    <ImageBackground  style={signupcss.signupcontainer}
        source={require('../Assets/bk.png')} 
        resizeMode="cover"
    >
        <View style={signupcss.txt}>
          <Text style={signupcss.txt1}></Text>
        </View>
        <View style={signupcss.whole}>
          <Text style={signupcss.txt2}>SignUp</Text>

          <TextInput style={signupcss.form} placeholder='Name'
            placeholderTextColor={"black"}
            keyboardType='default'
            // style={signupcss.input}
            onChangeText={(name) => setUserName(name)} />
          <TextInput style={signupcss.form} placeholder='Email'
            placeholderTextColor={"black"}
            keyboardType='email-address'
            // style={signupcss.input}
            onChangeText={(mail) => setMail(mail)} />
          <TextInput style={signupcss.form} placeholder='Number'
            keyboardType='phone-pad'
            placeholderTextColor={"black"}
            // style={signupcss.input} 
            onChangeText={(number) => setNumber(number)} />
          <TextInput style={signupcss.form} placeholder='Password'
            keyboardType='visible-password'
            placeholderTextColor={"black"}
            // style={signupcss.input} 
            onChangeText={(pass) => setPass(pass)} />
          <TouchableOpacity onPress={signUpNavigate} style={signupcss.btn} >
            <Text style={signupcss.btnTxt} >Create Account</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={signupcss.sign}>
            Already have a account ? <Text style={signupcss.signUp} onPress={() => navigation.navigate("SignIn")} >Log In</Text>
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default SignUp;
