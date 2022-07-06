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
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
import LinearGradient from 'react-native-linear-gradient';
const Invite = () => {
  return (
    <View style={styles.mainview}>
      <Image
        style={styles.image1}
        source={require('../Assets/invite.jpg')}

      />

      {/* <LinearGradient colors={['#f57b07', '#F0FCFF', '#755334']} style={styles.linear}> */}
      <View style={styles.whole}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>


          <Image
            style={styles.image}
            source={require('../Assets/invitation.png')}

          />
          <Text style={styles.txt1}>Invite</Text>
        </View>

        <TextInput style={styles.form} placeholder='Email' />
        <TextInput style={styles.form} placeholder='GroupName' />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt} >
            Invite
          </Text>
        </TouchableOpacity>
      </View>
      {/* </LinearGradient > */}
    </View>

  )
}
const styles = StyleSheet.create({
  whole: {
    marginVertical: 40
  },
  mainview: {
    height: windowHeight,
    // borderWidth: 2
    backgroundColor: 'white'
  },
  linear: {

    height: windowHeight,
  },
  txt1: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: 'black'
  },
  form: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    // margin: 20,
    borderRadius: 7,
    shadowColor: 'black',
    backgroundColor: "white",
    color: "black"
  },
  btn: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: 'darkorange',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth - 40,
    height: 50,
    borderColor: "black",
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1.5,
    alignSelf: 'center',
    marginVertical: 15,
    marginHorizontal: 30,
  },
  image: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
  btnTxt: {
    color: 'black',
    // fontWeight: '800'
  },
  image1: {
    width: windowWidth,
    height: 250,
    marginHorizontal: 5,
  },
})

export default Invite