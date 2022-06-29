import { StyleSheet ,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const forgotpasscss=StyleSheet.create({
    forgetpasscontainer:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      // backgroundColor:"white",
    //   padding:10
    // marginTop:50
    },
    btncontainer:{
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:"#24B0FF",
      width:windowWidth-20,
      height:50,
      borderRadius:5,
      borderWidth:2,
      marginVertical:5,
      borderColor:"black",
      elevation:10,
      shadowColor: "black",
      shadowOpacity: 2,
    },
    btnTxt:{
      fontWeight:"bold",
      color:"black"
    },
    input:{
      width:windowWidth-20,
      height:50,
      color:'black',
      backgroundColor:"white",
      marginVertical:5,
      borderRadius:5,
      borderWidth:2,
      borderColor:"black"
    },
    texts:{
        // marginTop:10,
        // marginLeft:10,
        paddingLeft:10,
        paddingTop:10,
        width:windowWidth
        // backgroundColor:'cyan',
        // height:windowHeight/3,
    },
    textFields:{
        // backgroundColor:'red',
        // marginTop:windowWidth-300,
        padding:10,
        // height:(windowHeight/1.7),
        justifyContent:'center'
    },
    header:{
      color:"black",
      fontWeight:"bold",
      fontSize:40,
      fontFamily:"Alias",
      fontStyle:"italic",
      width:'100%',
      padding: 5,
    }
})
export default forgotpasscss;