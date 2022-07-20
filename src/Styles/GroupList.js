import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GroupList = StyleSheet.create({
    groupContainer: {
        backgroundColor: "white",
        width: windowWidth - 4,
        height: windowWidth / 6,
        elevation: 5,
        shadowOffset: {
            width: -20,
            height: -20,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: "#1d1d1d",
        justifyContent: 'center',
        paddingHorizontal: 5,
        marginVertical: 3,
        borderRadius: 6
    },
    grpName: {
        color: "#2e2e2e",
        fontWeight: "bold",
        fontFamily: "Alias",
        fontSize: 25,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },
    cardHeader: {
        height: '80%',
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        alignItems: "center",
        marginVertical: 10,
        // backgroundColor: 'white'
    },
    titleDesc: {
        marginHorizontal: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // backgroundColor:"red",
        width:'70%'
    },
    timeText:{
        color:"black",
        fontWeight:'600'
    },
    messageTxt:{
        color:"grey",
        fontWeight:'800'
    }
})
export default GroupList;