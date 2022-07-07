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
    },
    container: {
      flex: 1,
      position:'relative',
      alignItems:"center",
      justifyContent:"center"
    },
    centerizedview:{
      width:'100%',
      top:'15%',
    },
    authbox:{
      width:windowWidth-20,
      backgroundColor:'#fafafa',
      borderRadius:10,
      alignSelf:'center',
      paddingHorizontal:14,
      padding:30,
      shadowColor:'#fff',
      shadowOffset:{
        width:2,
        height:2,
      },
      shadowOpacity:1,
      shadowRadius:3.84,
      elevation:10,
    },
    logobox:{
      width:100,
      height:100,
      backgroundColor:"#fff",
      borderRadius:1000,
      alignSelf:'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      top:-50,
      marginBottom:-50,
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:1,
      },
      shadowOpacity:0.2,
      shadowRadius:1.41,
      elevation:2,
    },
   trublelogintitle:{
    fontSize:22,
    fontWeight:'bold',
    paddingHorizontal:55,
    alignItems:'center',
    justifyContent:'center',
   },
   forgotmail:{
    fontSize:17,
    alignItems:'center',
    justifyContent:'center',
   },
  inputbox:{
    marginTop:10,
  },
  inputlabel:{
    fontSize:18,
    marginBottom:6,
    paddingTop:20,
  },
  input:{
    width:'100%',
    height:40,
    backgroundColor:'#dfe4ea',
    borderRadius:4,
    paddingHorizontal:10,
    borderColor:'black',
  },
    loginbutton:{
      backgroundColor:`#ffa500`,
      marginTop:10,
      paddingVertical:10,
      borderRadius:4,
    },
    loginbuttontext:{
      color:'#fff',
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
    },
    Contanier:{
      width:'100%',
      height:"100%",
      alignItems:"center",
      justifyContent:"center"
    }
})
export default forgotpasscss;