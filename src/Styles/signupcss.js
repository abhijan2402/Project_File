import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const signupcss = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    // justifyContent:'center',
    //   alignItems: 'center',
    // backgroundColor: "#E6E6E6"
  },
  btncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#24B0FF",
    width: windowWidth - 20,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5,
    borderColor: "black",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 2,
  },
  btnTxt: {
    fontWeight: "bold",
    color: "black"
  },
  input: {
    width: windowWidth - 20,
    height: 50,
    color: 'black',
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black"
  },
  texts: {
    // marginTop:10,
    // marginLeft:10,
    paddingLeft: 10,
    paddingTop: 10,
    // backgroundColor:'cyan',
    height: windowHeight / 3
  },
  textFields: {
    // backgroundColor:'red',
    // marginTop:windowWidth-300,
    padding: 10,
    height: (windowHeight / 1.7)
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "Alias",
    fontStyle: "italic",
    width: '100%',
    padding: 5,
  },
  subText: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "Alias",
    fontStyle: "italic",
    width: '100%',
    padding: 5,
    fontSize: 20
  },
  forgetpass: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "Alias",
    fontStyle: "italic",
    width: "100%",
    marginHorizontal: 10
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 3,
    width: windowWidth - 20,
    height: 50,
    color: 'black',
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
  },
  txt: {
    borderWidth: 1,
    backgroundColor: 'orange',
    height: windowHeight/3.5,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 250,
    // borderWidth:2
  },
  txt1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 80,
    color: 'black',
    fontWeight:"bold"
  },
  txt2: {
    fontSize: 30,
    textAlign: 'left',
    marginTop: 80,
    marginLeft: 20,
    fontWeight: '800',
    marginBottom: 20,
    color: 'black'   // color: 'black'
  },
  whole: {
    marginTop: -50,
  },
  form: {
    borderWidth: 1,
    margin: 20,
    marginTop: 5,
    marginBottom: 6,
    borderRadius: 7,
    shadowColor: 'black',
    backgroundColor:"white"
  },
  btn: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 17,
    backgroundColor: 'darkorange',

    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth - 40,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5,
    borderColor: "black",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 2,
    marginVertical:10,
    alignSelf:"center"
  },
  sign: {
    textAlign: 'center',
    marginTop: windowHeight/10,
    fontSize: 20,
    color: 'black',
  },
  signUp: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
})
export default signupcss;