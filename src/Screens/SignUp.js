import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  Image,
  Modal,
  Dimensions
} from 'react-native';
import { Auth } from 'aws-amplify';

import ProfileStyle from '../Styles/ProfileStyle';
import LinearGradient from 'react-native-linear-gradient';
import validateEmail from '../functions/validateEmail';
import ValidatePassword from '../functions/validatePassword';
import ValidateMobile from '../functions/ValidateMobile';
import signupcss from '../Styles/signupcss'
import onSignUp from '../Server/Signup';
import ImagePicker from 'react-native-image-crop-picker';
const SignUp = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height
  const data = "../Assets/bk.png"
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setUserName] = useState(null);
  const [email, setMail] = useState(null);
  const [password, setPass] = useState(null);
  const [phone_number, setNumber] = useState(null);
  const signUpNavigate = async () => {
    try {
      if (email == null || password == null || phone_number == null || name == null)
        throw "Empty Fileds"
        const responseEmail = validateEmail(email);
      const response = ValidatePassword(password);
      const responseMobile = ValidateMobile(phone_number)
      if (!responseEmail)
      throw "*Invalid email"; 
      if (!response)
        throw "*Required Strond Password";
      if (!responseMobile)
        throw "phone number is not invalid";
       
      await onSignUp(email, name, password, phone_number);
      navigation.navigate("confirmSignUp", { username: email })
    } catch (error) {
      console.log(error)
    }
  }
  const takePhotofromCamera = () => {
    ImagePicker.openCamera({
      // path: '../Assets/bk.png',
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path)
      setModalVisible(false)

    });
  }
  const takePhotofromGallery = () => {
    ImagePicker.openPicker({
      // path: '../Assets/bk.png',
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path)
      setModalVisible(false)
    });

  }
  return (
    <>
      <ImageBackground style={signupcss.signupcontainer}
        source={require('../Assets/bk.png')}
        resizeMode="cover"
      >
        <View style={signupcss.txt} >
          <Image
            // style={signupcss.image1}

            source={{ uri: image }}
            style={{ width: 150, height: 150, borderRadius: 100 }}

          />
          {/* <Text onPress={() => setModalVisible(true)}>setProfile</Text> */}
        </View>
        <View style={signupcss.whole}>
          <View style={signupcss.combo}>
            <Text style={signupcss.txt1}>Sign Up</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>

              <Image
                style={signupcss.image}
                source={require('../Assets/user.png')}

              />
            </TouchableOpacity>
          </View>

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
          <View style={{ display: "flex", flexDirection: "row" }}>

            <TouchableOpacity onPress={signUpNavigate} style={signupcss.btn} >
              <Text style={signupcss.btnTxt} >Create account</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => setModalVisible(true)} style={signupcss.btn1} >
              <Text style={signupcss.btnTxt} >set profile</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <View>
          <Text style={signupcss.sign}>
            Already have a account ? <Text style={signupcss.signUp} onPress={() => navigation.navigate("SignIn")} >Log In</Text>
          </Text>
        </View>
        <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <View style={{ backgroundColor: '#000000aa', flex: 1, justifyContent: 'flex-end' }}>
            <LinearGradient
              colors={['#FFFFFF', '#ffffff', '#ffffff']}

              style={{
                height: 2 * (windowHeight / 7),
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>
              <Text style={ProfileStyle.modalTxt}>
                Set Profile Picture
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']}
                  style={signupcss.customButton}

                >
                  <TouchableOpacity onPress={takePhotofromCamera}
                    style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    {/* <Text style={ProfileStyle.txt}>Camera</Text> */}
                    <Image
                      style={signupcss.image}
                      source={require('../Assets/camera.png')}

                    />

                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']}
                  style={signupcss.customButton}

                >
                  <TouchableOpacity onPress={takePhotofromGallery}
                    style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    {/* <Text style={ProfileStyle.txt}>Select from gallery</Text> */}
                    <Image
                      style={signupcss.image}
                      source={require('../Assets/gallery.png')}

                    />
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']}
                  style={signupcss.customButton}

                >
                  <TouchableOpacity onPress={() => setModalVisible(false)}
                    style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    {/* <Text style={ProfileStyle.txt}>Cancel</Text> */}
                    <Image
                      style={signupcss.image}
                      source={require('../Assets/x-button.png')}

                    />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={{ display: "flex", flexDirection: "row", }}>
                <Text style={{ justifyContent: 'space-evenly', marginTop: -40, marginHorizontal: 32, fontSize: 15, fontWeight: 'bold' }}>Camera</Text>
                <Text style={{ justifyContent: 'space-evenly', marginTop: -40, marginHorizontal: 32, fontSize: 15, fontWeight: 'bold' }}>Gallery</Text>
                <Text style={{ justifyContent: 'space-evenly', marginTop: -40, marginHorizontal: 32, fontSize: 15, fontWeight: 'bold' }}>Cancel</Text>

              </View>
            </LinearGradient>
          </View>
        </Modal>
      </ImageBackground>
    </>
  );
};

export default SignUp;
