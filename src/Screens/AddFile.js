import React , {useState} from 'react';
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
import Style from '../Styles/Style';
import DocumentPicker from 'react-native-document-picker';
import { API,Storage } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
const AddFile=({navigation,route})=>{
    const [name,setName]=useState(null);
    const [fileData,setFile]=useState([])
    const onUpload=async(fileData)=>{
        try {
          const { key } = await Storage.put(fileData[0].name,fileData[0],{
            contentType:fileData.type
          });
          console.log("File Data",key);
          const fileDataBaseData=await API.graphql({query:mutation.createTodo,variables:{input:{id:fileData[0].name,name:name,description:fileData[0].name}}})
          console.log("DB Data",fileDataBaseData);
          Alert.alert("File Added Successfully")
          navigation.navigate('Home',{filePath:fileDataBaseData.data.createTodo})
        } catch (error) {
          console.log(error)
        }
    }

    const addFile=async()=>{
        try {
            const res = await DocumentPicker.pick({type: [DocumentPicker.types.allFiles],});
            setFile(res);
            console.log(fileData)
        }catch( err ) {
            if ( DocumentPicker.isCancel(err) ) {
            } else {
                throw err;
            }
        }
    }
    return(
        <View style={Style.container}>
            <Text style={Style.header}>Upload Files to Amazon S3</Text>
            <TextInput 
                placeholder='File Name'
                placeholderTextColor={"black"}
                style={Style.input}
                onChangeText={(name)=>setName(name)}
            />
            <TouchableOpacity style={Style.btncontainer} onPress={addFile} >
                <Text style={Style.btnTxt} >Add File</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.btncontainer} onPress={()=>onUpload(fileData)} >
                <Text style={Style.btnTxt} >Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AddFile;