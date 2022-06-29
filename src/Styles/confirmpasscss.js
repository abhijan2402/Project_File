import { StyleSheet ,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const confirmpasscss=StyleSheet.create({
    confirmpasscontainer:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      // backgroundColor:"#E6E6E6"
    },
    header:{
      color:"black",
      fontWeight:"bold",
      fontSize:25,
      fontFamily:"Alias",
      fontStyle:"italic",
      width:'100%',
      padding: 5,
    },
    texts:{
        // marginTop:10,
        // marginLeft:10,
        padding:10,
        width:windowWidth,
        marginLeft:20
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
})
export default confirmpasscss;