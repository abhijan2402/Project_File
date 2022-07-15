import { StyleSheet ,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const FileStyle=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between",
    backgroundColor:"#F1F1F1"
  },
  messageContainer:{
    backgroundColor:"#59B4FF",
    marginHorizontal:10,
    paddingHorizontal:10,
    paddingVertical:5,
    marginTop:6,
    marginBottom:5,
    borderColor:'#73D5F9',
    borderWidth:1,
    borderRadius:5,
    maxWidth:'70%'
  },
  time:{
    fontSize:12,
    color:"black",
    marginHorizontal:10,
    fontWeight:'bold'
  },
  groupTitle:{
      width:windowWidth,
      padding:10,
      alignItems:"center",
      flexDirection: 'row',
      justifyContent:"space-between",
      borderBottomColor:"#898E8F",
      borderBottomWidth:2,
      backgroundColor:"#A3CAFF"
  },
  titleView:{
    flexDirection: 'row',
    alignItems:"center",
  },  
  title:{
    color:"black",
    fontSize:15,
    fontFamily:"Alias",
    // marginLeft:10,
    fontWeight:"bold"
  },
  subText:{
    color:"black",
    padding:4
  },
  image:{
    height:40,
    width:40,
    borderRadius:60/2,
    borderColor:'black',
    overflow:'hidden'
  },
  iconPic:{
    height:40,
    width:40,
  },
  Icon:{
    flexDirection:"row",
    justifyContent:"flex-end",
    alignSelf:"flex-end",
    // backgroundColor:"red",
  },
  searchInput:{
    width:'75%',
    height:50,
    backgroundColor:"white",
    color:"black",
    fontWeight:"bold",
    fontSize:15,
    borderRadius:5,
    borderWidth:2,
    borderColor:"black"
  },
  chatInput:{
    height:50,
    width:2*(windowWidth/2.5),
    backgroundColor:"white",
    color:"black",
    margin:10,
    borderWidth:1,
    borderRadius:5
  },
  chatIPStyle:{
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:"center",
    backgroundColor:"#A3CAFF"
  },
  sentIcon:{
    width:40,
    height:40
  }
})
export default FileStyle;