import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
const signinStyle = StyleSheet.create({
  signInContanier: {
    flex: 1,
    width: '100%',
    justifyContent:"space-between"
  },
  btnTxt: {
    fontWeight: "bold",
    color: "black"
  },
  txt7: {
    borderWidth: 1,
    backgroundColor: 'orange',
    height: windowHeight/3.5,
    borderBottomLeftRadius: 190,
    borderBottomRightRadius: 190,
  },
  txt8: {
    fontSize: 30,
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
    fontSize: 40,
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
    backgroundColor:"white",
    color:"black"
  },
  btn: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 4,
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
    alignSelf:'center',
    marginVertical: 10,
  },
  forgot: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight:"bold"
  },
  sign: {
    textAlign: 'center',
    // marginTop:windowHeight/10,
    fontSize: 20,
    color: 'black',
    fontWeight:"bold",
    marginBottom:20
  },
  signUp: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
})
export default signinStyle