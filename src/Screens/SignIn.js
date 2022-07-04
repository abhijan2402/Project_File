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
const SignIn = ({ navigation }) => {
  const [mail, setMail] = useState(null);
  const [pass, setPass] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const validateInputs = () => {
    try {
      if (mail == null || pass == null) {
        throw "Empty Fileds"
      }
      onSighIn(mail, pass, loading, setLoading)
    } catch (error) {
      setError(true)
      Alert.alert(error, "fill all fields")
    }
  }
  return (
    <ImageBackground style={signinStyle.signInContanier}
      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9nIKoB9xa1bDA5LSttQpyT5m8HWHxLbUMw&usqp=CAU" }}
      resizeMode="cover"
    >
      <View >
        <View style={signinStyle.txt7}>
          <Text style={signinStyle.txt8}>Welcome Back</Text>
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
          <TouchableOpacity onPress={validateInputs} style={signinStyle.btn}>
            <Text style={signinStyle.btnTxt} >
              {loading ? <ActivityIndicator size={30} color="blue" /> : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={signinStyle.forgot} onPress={() => navigation.navigate('forgetpassword')}>Forgot Password?</Text>
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
