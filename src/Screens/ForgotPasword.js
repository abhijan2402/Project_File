import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,Image,Button,props,Dimensions,TouchableWithoutFeedback,Keyboard
} from 'react-native';
import { Auth } from 'aws-amplify';
import forgotpasscss from '../Styles/forgotpasscss';
// import Style from '../forgotpasscss/Style'
// import Style from '../Styles/Style'
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
    // <ImageBackground  style={forgotpasscss.forgetpasscontainer}
    //     source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9nIKoB9xa1bDA5LSttQpyT5m8HWHxLbUMw&usqp=CAU"}} 
    //     resizeMode="cover"
    // >
    //   <View style={forgotpasscss.forgetpasscontainer} >
    //     <View style={forgotpasscss.texts}>
    //       <Text style={Style.header}>Forgot Password</Text>
    //       <Text style={Style.subText}>
    //         Enter you Email and a code has been send to your mail..
    //       </Text>
    //     </View>
    //     <View style={forgotpasscss.textFields}>
    //       <TextInput placeholder='Email' 
    //         placeholderTextColor={"black"}
    //         keyboardType='email-address'
    //         style={Style.input}
    //         onChangeText={(mail)=>setMail(mail)}
    //       />
    //       <TouchableOpacity style={Style.btncontainer} onPress={forgetPass} >
    //         <Text style={Style.btnTxt} >Continue</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </ImageBackground>

    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={forgotpasscss.container}>
    <View style={forgotpasscss.bigcircle}></View>
    <View style={forgotpasscss.smallcircle}></View>
    <View style={forgotpasscss.centerizedview}>
      <View style={forgotpasscss.authbox}>
        <View style={forgotpasscss.logobox}>
        <Image
        source={{
          uri:'https://techmind.s3.ap-south-1.amazonaws.com/11.jpg',
        }}
        style={{width:100,height:100,borderRadius:900}}
        />
        </View>
        <Text style={forgotpasscss.trublelogintitle} >Forgot Password?</Text>
        <View style={forgotpasscss.inputbox}>
        <Text style={forgotpasscss.forgotmail}>Enter your e-mail address we'll send you a link to reset your password</Text>
        
          <Text style={forgotpasscss.inputlabel}>Email</Text>

          <TextInput
           style={forgotpasscss.input}
           autoCapitalize="characters"
           keyboardType="email-address"
           textContentType="emailAddress"
           placeholder="example@gamil.com"
          />
        </View>
       
        <TouchableOpacity style={forgotpasscss.loginbutton}>
         <Text style={forgotpasscss.loginbuttontext}>Send Email</Text>
        </TouchableOpacity>
       
      </View>
    </View>
    </View>
  </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
