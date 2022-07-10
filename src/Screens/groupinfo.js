import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  props,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';

import React from 'react';

import LinearGradient from 'react-native-linear-gradient';



const Groupinfo = () => {
  return (
    <>
      <LinearGradient colors={['#f6f3ef', '#d8f4db']}>
        <ScrollView>

          <View style={styles.body}>
            <LinearGradient colors={['#48A9DF', '#58B5E9','#3B82AA', '#36859D']}>
              <View style={styles.header}>

                <View>
                  <Image
                    source={{
                      uri: 'https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-back-icon-png-image_1009850.jpg',
                    }}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text style={styles.headertext}>The Branches</Text>
                </View>
              </View>
            </LinearGradient>
            <View style={{ marginTop: 15 }}>
              <LinearGradient style={styles.gradient} colors={['#48A9DF', '#58B5E9','#3B82AA', '#36859D']}>
                <View style={styles.logobox}>
                  <Image
                    source={{
                      uri: 'https://www.pinclipart.com/picdir/middle/407-4074257_cartoon-family-pic-cartoon-family-group-happy-family.png',
                    }}
                    style={{ width: 100, height: 100, borderRadius: 900 }}
                  />
                </View>
              </LinearGradient>
            </View>
            <View style={styles.space}>
              <LinearGradient style={{ height: 110, borderWidth: 4, borderRadius: 10, borderColor: 'transparent' }} colors={['#f48913', '#e39c27', '#ff8500']}>
                <View style={styles.bluepart}>
                  <View style={styles.icon}>
                    <View
                      style={{
                        textAlign: 'left',
                        justifyContent: 'flex-start',

                      }}>
                      <Image
                        source={{
                          uri: 'https://www.freeiconspng.com/uploads/phone-call-icon-16.png',
                        }}
                        style={{
                          width: 50,
                          height: 50,
                          paddingTop: 45,
                          marginTop: 19,


                        }}
                      />
                    </View>
                    <View
                      style={{
                        textAlign: 'left',
                        justifyContent: 'flex-start',

                      }}>
                      <Image
                        source={{
                          uri: 'https://cdn4.vectorstock.com/i/1000x1000/12/48/flat-camera-icon-on-blue-background-vector-29691248.jpg',
                        }}
                        style={{
                          width: 50,
                          height: 50,
                          paddingTop: 45,
                          marginTop: 19,

                          borderBottomLeftRadius: 40,
                          borderBottomRightRadius: 40,
                          borderTopLeftRadius: 40,
                          borderTopRightRadius: 40,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        textAlign: 'left',
                        justifyContent: 'flex-start',

                      }}>
                      <Image
                        source={{
                          uri: 'https://image.pngaaa.com/560/25560-middle.png',
                        }}
                        style={{
                          width: 50,
                          height: 50,
                          paddingTop: 45,
                          marginTop: 19,

                          borderBottomLeftRadius: 120,
                          borderBottomRightRadius: 120,
                          borderTopLeftRadius: 120,
                          borderTopRightRadius: 120,
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.nameicon}>
                  <Text style={styles.phone}>Phone</Text>
                  <Text style={styles.phone}>Video</Text>
                  <Text style={styles.phone}>Search</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.space}>
              <LinearGradient style={styles.gradient} colors={['#48A9DF', '#58B5E9','#3B82AA', '#36859D']}>
                <Text style={styles.parti}>4 Participants</Text>
                <View style={styles.anupam}>
                  <View style={styles.box}>
                    <Image
                      source={{
                        uri: 'https://spng.subpng.com/20200219/giu/transparent-face-cartoon-head-forehead-chin-5e4d6168bd9403.7272985615821295127765.jpg',
                      }}
                      style={{ width: 50, height: 50, borderRadius: 900 }}
                    />
                  </View>
                  <Text style={styles.firstname}>Anupam</Text>
                </View>
                <View style={styles.anupam}>
                  <View style={styles.box}>
                    <Image
                      source={{
                        uri: 'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-portrait-office-worker-business-man-document-photo-png-image_337873.jpg',
                      }}
                      style={{ width: 50, height: 50, borderRadius: 900 }}
                    />
                  </View>
                  <Text style={styles.firstname}>Anuj</Text>
                </View>
                <View style={styles.anupam}>
                  <View style={styles.box}>
                    <Image
                      source={{
                        uri: 'https://thumbs.dreamstime.com/b/passport-photo-young-handsome-man-closeup-passport-photo-young-handsome-redhead-man-shirt-closeup-yellow-round-vector-115296420.jpg',
                      }}
                      style={{ width: 50, height: 50, borderRadius: 900 }}
                    />
                  </View>
                  <Text style={styles.firstname}>Chirag</Text>
                </View>
                <View style={styles.anupam}>
                  <View style={styles.box}>
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/vectors/illustration-of-a-young-woman-in-a-suit-id-photo-size-vector-id1268988213?k=20&m=1268988213&s=170667a&w=0&h=saa61OxqSVoEL6xAJPpJNf_sbkPWwtMndlFJcxN2KKY=',
                      }}
                      style={{ width: 50, height: 50, borderRadius: 900 }}
                    />
                  </View>
                  <Text style={styles.firstname}>Anshula</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
     borderWidth: 4,
    //  backgroundColor:'lightblue',
    borderColor: 'transparent',
    borderRadius: 2,
    shadowColor: 'blue',
    shadowRadius: 5
  },
  headertext: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    justifyContent: 'center',
    letterSpacing: 1,
    textAlign: 'center',

  },

  logobox: {
    width: 100,
    height: 100,
    marginTop: 70,
    backgroundColor: '#fff',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  // space: {
  //   marginTop: 5,

  // },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  // bluepart: {
  //   flexDirection: 'row',
  // },
  nameicon: {

    flexDirection: 'row',

    justifyContent: 'space-evenly'
  },
  phone: {
    fontSize: 20,
    color: 'black'
  },
  parti: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    width: 50,
    height: 50,
    marginTop: 70,
    backgroundColor: '#fff',
    borderRadius: 1000,
    // alignSelf:'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  anupam: {
    flexDirection: 'row',
  },
  firstname: {
    marginLeft: 25,
    marginTop: 30,
    fontSize: 20,
    color: 'black',
  },
  gradient: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'transparent',
  },
});

export default Groupinfo;