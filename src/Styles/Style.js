import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E6E6E6"
  },
  btncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#24B0FF",
    backgroundColor: 'darkorange',
    width: windowWidth - 20,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: "black",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 2,
  },
  btnTxt: {
    fontWeight: "bolder",

    color: "black"
  },
  input: {
    width: windowWidth - 20,
    height: 50,
    color: 'black',
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black"
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
    // fontStyle:"italic",
    width: '100%',
    padding: 20,
    fontSize: 18
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
  }
})
export default Style;