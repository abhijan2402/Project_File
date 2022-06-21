import { StyleSheet ,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const FileStyle=StyleSheet.create({
    fileContainer:{
      flex:1,
      flexDirection:'row-reverse',
      justifyContent:'space-between',
      alignItems: 'center',
      backgroundColor:"#E6E7E7",
      margin:10,
      padding:10,
      width:windowWidth-20,
    },
    btnBody:{
      backgroundColor:"#0EA8FF",
      width:windowWidth/5,
      height:40,
      alignItems:'center',
      justifyContent:"center",
      shadowColor: '#000',
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5,
      borderColor:'#C7C7C7',
      borderWidth:1,
      borderRadius:10,
      overflow: 'hidden',
      marginBottom:10
    },
    title:{
        fontSize:20,
        color:"black",
        fontFamily:"Alias",
        padding:5,
        fontWeight:"bold",

    },
    fileDesc:{
        color:"black",
        fontSize:15,
        // marginLeft:20,
        // backgroundColor:"cyan",
        width:'100%',
        padding:10
    },
    btnTxt:{
      fontWeight:"bold",
      color:"black"
    },
    groupTitle:{
        width:windowWidth,
        padding:10,
        alignItems:"center",
        flexDirection: 'row',
        justifyContent:"space-between",
        backgroundColor:"#D0D0D0"
    },
    titleView:{
      flexDirection: 'row',
      alignItems:"center",
    },  
    title:{
      color:"black",
      fontSize:25,
      fontFamily:"Alias",
      marginLeft:10
    },
    subText:{
      color:"black",
      padding:4
      // backgroundColor:"cyan",
    },
    image:{
      // backgroundColor:"grey",
      height:60,
      width:60,
      borderRadius:60/2,
      borderColor:'black',
      overflow:'hidden'
    },
    iconPic:{
      height:30,
      width:30,
    },
    Icon:{
      flexDirection:"row",
      alignItems:"center"
    }
})
export default FileStyle;