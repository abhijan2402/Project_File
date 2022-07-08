import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height
const ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        // backgroundColor:"white"
    },
    profileCard: {
        width: windowWidth - 20,
        height: windowHeight / 2,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5,
        elevation: 10,
        alignItems: "center",
    },
    txtColor: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Alias",
        height: 50,
        marginTop: 20,
        width: '100%'
    },
    imageView: {
        // backgroundColor:"cyan",
        alignItems: "center",
        justifyContent: "center",
        height: windowWidth / 3.5,
        width: windowWidth / 3.5,
        borderRadius: windowWidth / 7,
        alignSelf: "center",
        borderColor: "white",
        top: -windowHeight / 15,
        borderWidth: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5,
        elevation: 10,
    },
    details: {
        position: "relative",
        width: "95%"
    },
    adminImage: {
        height: windowWidth / 4,
        width: windowWidth / 4,
        borderRadius: windowWidth / 8,
    },
    icon: {
        height: 30,
        width: 30
    },
    nameIcon: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        // width:'100%',
        // backgroundColor:"red",
        justifyContent: "space-between",
        // padding: 5,
        paddingHorizontal: 10
    },
    customButton: {
        height: 50,
        width: windowWidth - 20,
        // alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#FAC2A8',
        borderRadius: 5,
    },
    txt: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20
    },
    floatingButton: {
        height: 60,
        width: 60,
        backgroundColor: "white",
        borderRadius: 60 / 2,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 10,
        right: 10
    },
    input: {
        width: windowWidth - 20,
        height: 50,
        backgroundColor: "white",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        borderRadius: 5,
        marginTop: 10,
        color: "black"
    },
    modalStyle: {
        // height: 2 * (windowHeight / 3),
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    modalTxt: {
        color: "black",
        fontWeight: "bold",
        fontSize: 25,
        width: "100%",
        marginLeft: 50
    }
})
export default ProfileStyle;