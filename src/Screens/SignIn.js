import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
// import signinStyle from '../signinStyle/signincss';
// import Style from '../signinStyle/Style';
import signinStyle from '../Styles/signincss'
import { Auth } from 'aws-amplify';
import onSighIn from '../Server/Signin';
import validateEmail from '../functions/validateEmail';
import ValidatePassword from '../functions/validatePassword';
const SignIn = ({ navigation }) => {
  const [mail, setMail] = useState(null);
  const [pass, setPass] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const validateInputs = () => {
    try {
      if (mail == null || pass == null)
        throw "Empty Fileds"
        const responseEmail=validateEmail(mail);
      const response = ValidatePassword(pass);
      if(!responseEmail)
      throw "invalid email";
      if (!response)
        throw "invalid password ";
       
      onSighIn(mail, pass, loading, setLoading)
    } catch (error) {
      setError(true)
      Alert.alert(error)
    }
  }
  return (
    <ImageBackground style={signinStyle.signInContanier}
      source={require('../Assets/bk.png')}
      resizeMode="cover"
    >
      <View >
        <View style={signinStyle.txt7}>
          <Text style={signinStyle.txt8}></Text>
        </View>
        <View style={signinStyle.whole}>
          <Text style={signinStyle.txt1}>SignIn</Text>

          <TextInput style={signinStyle.form} placeholder='Email'
            placeholderTextColor={error ? "red" : "black"}
            keyboardType='email-address'
            // style={error?Style.errorInput:signinStyle.input}
            onChangeText={(mail) => setMail(mail)}
            onFocus={() => setError(false)} />
          <TextInput style={signinStyle.form} placeholder='Password'
            keyboardType='visible-password'
            placeholderTextColor={error ? "red" : "black"}
            secureTextEntry={true}
            onChangeText={(pass) => setPass(pass)} />
          <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-between", alignItems: "center", alignSelf: "center" }}>
            <TouchableOpacity onPress={validateInputs} style={signinStyle.btn}>
              <Text style={signinStyle.btnTxt} >
                {loading ? <ActivityIndicator size={30} color="blue" /> : "Login"}
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={signinStyle.forgot} onPress={() => navigation.navigate('forgetpassword')}>Forgot Password?</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={signinStyle.sign}>
          Don't have a account ? <Text style={signinStyle.signUp} onPress={() => navigation.navigate("SignUp")} >SignUp</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SignIn;
