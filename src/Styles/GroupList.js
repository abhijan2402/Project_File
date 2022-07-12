import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GroupList = StyleSheet.create({
    groupContaier: {
        backgroundColor: "white",
        width: windowWidth / 2.3,
        height: windowHeight / 5.5,
        elevation: 5,
        margin: 10,
        borderRadius: 10,
        shadowOffset: {
            width: -10,
            height: -10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: "#1d1d1d",
        borderWidth: 2,
        borderColor: "#A8A9A8"

    },
    grpName: {
        color: "#2e2e2e",
        fontWeight: "bold",
        fontFamily: "Alias",
        fontSize: 20,
        textAlign: "right",
        paddingHorizontal: 10,
        width: "100%",
        textAlign: 'center'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginHorizontal: 50,
        marginTop: 15,
        // borderWidth: 2

    },
    cardHeader: {
        width: "100%",
        height: '70%',
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // borderWidth: 2
    },
    crr: {
        // borderWidth: 2,
        justifyContent: 'center'
    },
    cardFooter: {
        width: '100%',
        height: '30%',
        backgroundColor: "#D9D9D9",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopWidth: 2,
        borderColor: "#A8A9A8"
    },
    footerTxt: {
        color: "black",
        fontSize: 15,
        padding: 5,
        textAlign: 'center'
        // flexDirection: 'row'
        // , borderWidth: 1
    },
    container: {
        alignItems: "center",
    },

})
export default GroupList;