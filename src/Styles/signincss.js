import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
const signinStyle = StyleSheet.create({
  signInContanier: {
    flex: 1,
    width: '100%',
    justifyContent: "space-between"
  },
  btnTxt: {
    fontWeight: "bold",
    color: "black",
    fontSize:18
  },
  txt7: {
    // borderWidth: 1,
    // backgroundColor: 'orange',
    height: windowHeight / 3.5,
    // borderBottomLeftRadius: 190,
    // borderBottomRightRadius: 190,
    width:windowWidth,
    textAlign:'left'
  },
  txt8: {
    fontSize:40,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 80,
    color: 'black'
  },
  backgroundImage: {
    flex: 1,
  },
  view: {
    textAlign: 'center',
    fontSize: 13,
  },
  txt: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  },
  txt1: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
    marginLeft: 20,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  whole: {
    marginTop: 60,
  },
  form: {
    borderWidth: 1,
    margin: 20,
    borderRadius: 7,
    shadowColor: 'black',
    backgroundColor: "white",
    color: "black"
  },
  btn: {
    borderWidth: 2,
    padding: 5,
    borderTopRightRadius: windowWidth/5,
    borderBottomRightRadius: windowWidth/5,
    textAlign: 'center',
    backgroundColor: '#FFDD35',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth/2.5,
    height: 50,
    borderColor: "black",
    alignSelf: 'center',
    marginVertical: 10,
    alignSelf:"flex-start",
  },
  forgot: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
  },
  sign: {
    textAlign: 'center',
    // marginTop:windowHeight/10,
    fontSize: 20,
    color: 'black',
    fontWeight: "bold",
    marginBottom: 20
  },
  signUp: {
    color: 'white',
    fontWeight: '800',
    // color: 'darkorange'
  },
})
export default signinStyle