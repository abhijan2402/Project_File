import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    FlatList,
    Alert,
    Dimensions
} from 'react-native';
import UploadFileCss from '../Styles/UploadFileCss';
import Style from '../Styles/Style'
import DocumentPicker from 'react-native-document-picker';
import onUpload from '../Server/UploadFile';
const UploadFile = ({ navigation, route }) => {
    const { groupName, grpimage } = route.params;
    const [fileName, setName] = useState(null);
    const [fileDesc, setFileDesc] = useState(null);
    const [fileData, setFile] = useState([])
    const addFile = async () => {
        try {
            const res = await DocumentPicker.pick({ type: [DocumentPicker.types.allFiles], });
            setFile(res);
            // console.log(fileData)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    }
    const setFileData = async () => {
        const response = await onUpload(fileData, fileName, fileDesc, groupName);
        // if(response){
        //     navigation.navigate("GroupList",{groupName:groupName,groupImage:grpimage});
        // }
    }
    return (
        <>
            <View style={UploadFileCss.uploadContainer}>
                <View style={UploadFileCss.background} />
                <Text style={UploadFileCss.title}>Upload Files....</Text>
                <View>
                    <TextInput
                        placeholder='File Name'
                        placeholderTextColor={"black"}
                        style={UploadFileCss.input}
                        onChangeText={(fileName) => setName(fileName)}
                    />
                    <TextInput
                        placeholder='File Description'
                        placeholderTextColor={"black"}
                        style={UploadFileCss.textarea}
                        onChangeText={(fileDesc) => setFileDesc(fileDesc)}
                        multiline={true}
                        textAlignVertical='top'
                        numberOfLines={10}
                    />
                    <View style={UploadFileCss.fileBtnView}>
                        <Text style={UploadFileCss.filetilte}>
                            {fileData.length == 0 ? "no file selected" : fileData[0].name}
                        </Text>
                        <TouchableOpacity
                            style={[
                                UploadFileCss.btnBody,
                                UploadFileCss.fileButton
                            ]}
                            onPress={addFile} >
                            <Text style={UploadFileCss.btnText} >Choose File</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={UploadFileCss.btnBody} onPress={() => setFileData(fileData, fileName, fileDesc, groupName)} >
                    <Text style={UploadFileCss.btnText} >Upload File</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default UploadFile;