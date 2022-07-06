import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  Image
} from 'react-native';
import Invitestyles from '../Styles/Invitecss';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
import LinearGradient from 'react-native-linear-gradient';
const Invite = () => {
  return (
    <View style={Invitestyles.mainview}>
      <Image
        style={Invitestyles.image1}
        source={require('../Assets/invite.jpg')}
      />

      <View style={Invitestyles.whole}>
        <View style={Invitestyles.combo}>
          <Image
            style={Invitestyles.image}
            source={require('../Assets/invitation.png')}
          />
          <Text style={Invitestyles.txt1}>Invite your friends</Text>
        </View>
        <TextInput style={Invitestyles.form} placeholder='Enter e-mail' />
        <TextInput style={Invitestyles.form} placeholder='Enter Group Name' />
        <TouchableOpacity style={Invitestyles.btn}>
          <Text style={Invitestyles.btnTxt} >
            Invite
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Invite