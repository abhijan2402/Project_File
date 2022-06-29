import { StyleSheet ,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const newpasscss=StyleSheet.create({
    newpasscontainer:{
      flex:1,
      // justifyContent:'center',
      alignItems: 'center',
      justifyContent:'space-evenly'
      // backgroundColor:"red"
    },
    btncontainer:{
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:"orange",
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
    header:{
      color:"black",
      fontWeight:"bold",
      fontSize:30,
      fontFamily:"Alias",
      fontStyle:"italic",
      width:'100%',
      padding: 5,
    },
    subText:{
      color:"black",
      fontWeight:"bold",
      fontFamily:"Alias",
      // fontStyle:"italic",
      width:'100%',
      padding:20,
      fontSize:18
    },
    texts:{
        padding:10,
        marginHorizontal:20,
        width:windowWidth,
        // backgroundColor:"red",
        height:windowHeight/4,
        justifyContent:"center"
      },
    forgetpass:{
      color:"black",
      fontWeight:"bold",
      fontFamily:"Alias",
      fontStyle:"italic",
      width:"100%",
      marginHorizontal:10
    },
    errorInput:{
      borderColor:"red",
      borderWidth:3,
      width:windowWidth-20,
      height:50,
      color:'black',
      backgroundColor:"white",
      marginVertical:5,
      borderRadius:5,
    }
})
export default newpasscss;