import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const signupcss = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  btnTxt: {
    fontWeight: "bold",
    color: "black"
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
    // borderWidth: 1,
    // backgroundColor: 'orange',
    // height: windowHeight / 3.5,
    // borderBottomLeftRadius: 1,
    // borderBottomRightRadius: 250,
    // borderWidth: 2
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  txt1: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 80,
    color: 'black',
    fontWeight: "bold"
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
    backgroundColor: "white",
    color: "black"
  },
  btn: {
    borderWidth: 2,
    padding: 15,
    // borderRadius: 4,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'orange',


    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth - 200,
    height: 50,
    // borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 2,
    marginVertical: 20,
    alignSelf: "center",
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
  },
  btn1: {
    borderWidth: 2,
    padding: 10,
    // borderRadius: 4,
    textAlign: 'center',
    fontSize: 17,
    backgroundColor: 'darkorange',


    alignItems: 'center',
    justifyContent: 'center',
    // width: windowWidth - 40,
    height: 50,
    // borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
    borderColor: "black",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 2,
    marginVertical: 10,
    alignSelf: "center",

    marginLeft: 100,

  },
  sign: {
    textAlign: 'center',
    marginTop: windowHeight / 30,
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  },
  signUp: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  image: {
    width: 40,
    height: 38,
    marginHorizontal: 155,
    alignSelf: 'center'
  },
  txt1: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'serif'
  },
  combo: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 20

  },
  customButton: {
    height: 50,
    width: windowWidth - 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    // borderWidth: 2,
    borderColor: '#FAC2A8',
    borderRadius: 5,
  },
})
export default signupcss;