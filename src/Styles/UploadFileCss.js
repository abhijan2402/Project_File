import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UploadFileCss = StyleSheet.create({
    uploadContainer: {
        flex: 1,
        // backgroundColor:"red",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    textarea: {
        width: windowWidth - 35,
        backgroundColor: "#E4E6E6",
        borderColor: '#636363',
        borderBottomWidth: 2,
        textAlignVertical: "top",
        marginTop: 10,
        fontWeight: "bold",
        color: "black"
    },
    filetilte: {
        fontWeight: "bold",
        fontSize: 15,
        color: 'black',
        // backgroundColor:"red",
        width: windowWidth / 2
    },

    title: {
        color: "#585959",
        width: windowWidth / 1.8,
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 30,
    },
    btnBody: {
        backgroundColor: "#0EA8FF",
        width: windowWidth - 50,
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderColor: '#C7C7C7',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10
    },
    btnText: {
        color: 'white',
        fontWeight: "bold"
    },
    input: {
        width: windowWidth - 35,
        backgroundColor: "#E4E6E6",
        borderColor: '#636363',
        borderBottomWidth: 2,
        fontWeight: "bold",
        color: "black"
    },
    fileButton: {
        width: 100,
        borderColor: "#787A79",
    },
    fileBtnView: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor:"red",
        justifyContent: "space-between",
        marginTop: 10
    },
    background: {
        position: 'absolute',
        backgroundColor: "#60BEFF",
        width: windowWidth,
        height: windowHeight - 150,
        bottom: 0,
        borderTopRightRadius: 230,
        borderTopLeftRadius: 0,
        zIndex: -6,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    }
})
export default UploadFileCss;