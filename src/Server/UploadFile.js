import { Alert } from 'react-native';
import { API,Auth,Storage } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
const onUpload=async(fileData,fileName,fileDesc,groupName)=>{
    try {
      // const { key } = await Storage.put(fileData[0].name,fileData[0],{
      //   contentType:fileData.type
      // });
      // console.log("File Data",key);
      // const authedUser=await Auth.currentAuthenticatedUser();
      // const fileDataBase={
      //   filename:fileName,
      //   fileDescription:fileDesc,
      //   filePath:fileData[0].name,
      //   groupFilesId: groupName,
      //   userUserFileId:authedUser.attributes.email
      // }
      // const fileDataBaseData=await API.graphql({query:mutation.createFiles,variables:{input:fileDataBase}})
      // console.log("DB Data",fileDataBaseData.data.createFiles);
      // Alert.alert("File Added Successfully")
      return true;
    } catch (error) {
      console.log(error)
    }
}
export default onUpload;