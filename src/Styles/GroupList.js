import { StyleSheet ,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GroupList=StyleSheet.create({
    groupContainer:{
        backgroundColor:"white",
        width:windowWidth-20,
        height:windowWidth/6,
        elevation:5,
        shadowOffset:{
            width:-10,
            height:-10,
        },
        shadowOpacity:1,
        shadowRadius:10,
        shadowColor:"#1d1d1d",
        justifyContent:'center',
        paddingHorizontal:5
    },
    grpName:{
        color:"#2e2e2e",
        fontWeight:"bold",
        fontFamily:"Alias",
        fontSize:25,
    },
    image:{
        height:50,
        width:50,
        borderRadius:50/2,
    },
    cardHeader:{
        height:'80%',
        backgroundColor:"white",
        flexDirection: 'row',
        alignItems:'center'
    },
    container:{
        alignItems:"center",
    },
    titleDesc:{
        marginHorizontal:10
    }
})
export default GroupList;