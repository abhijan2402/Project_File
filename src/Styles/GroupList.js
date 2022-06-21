import { StyleSheet ,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GroupList=StyleSheet.create({
    groupContaier:{
        backgroundColor:"white",
        width:windowWidth,
        height:60,
        flexDirection:"row",
        alignItems:"center",
        elevation:10
    },
    grpName:{
        color:"black",
        fontWeight:"bold",
        fontFamily:"Alias",
        fontSize:20,
        marginLeft:10
    },
    image:{
        height:40,
        width:40,
        borderRadius:40/2,
        overflow:'hidden',
        marginLeft:10
    }
})
export default GroupList;