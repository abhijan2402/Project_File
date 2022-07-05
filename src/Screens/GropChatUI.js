import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  Image
} from 'react-native';
import { API, Auth, Storage   } from 'aws-amplify';
import 'react-native-gesture-handler'; 
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import Style from '../Styles/Style'
import FileStyle from '../Styles/FileStyle';
const GroupChatUI=({route,navigation})=>{
  const {groupName,groupImage} = route.params;
  const [list,setList]=useState([]);
  const [groupTitle,setGroupTitle]=useState(null);
  const [groupPic,setGroupPic]=useState(null);
  const renderItem = ({ item }) => (
    <View style={FileStyle.fileContainer}>
      <Text style={FileStyle.title}>{item.filename}</Text>
      <TouchableOpacity style={FileStyle.btnBody} onPress={()=>console.log(item.filename)} >
        <Text style={FileStyle.btnTxt} >Open</Text>
      </TouchableOpacity>
    </View>
  );

  useEffect(()=>{
    getFiles();
    // console.log(groupImage,groupName)
    setGroupTitle(groupName)
    setGroupPic(groupImage)
    // subscribeFile();
    return()=>{
      setList([]);
      setGroupTitle(null)
      setGroupPic(null)
    }
  },[])
  const subscribeFile=async()=>{
    console.log("subscirbe")
    try {
      await API.graphql({
        query:subscriptions.onCreateFilesByGroupId,
        variables:{
          groupFilesId:groupName
        }
      })
      .subscribe({
        next: data => {
          console.log('data: ', data.value)
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  const getFiles=async()=>{
    try {
      const fileData=await API.graphql({
        query:queries.listFiles
      })
      setList(fileData.data.listFiles.items)
      // console.log(fileData.data.listFiles.items)
    } catch (error) {
      console.log(error)
    }
  }
  const onDownload=async(filePath)=>{
    try {
      const filePath=await Storage.get(filePath,{ expires:60,level:'public' });
      // console.log(filePath);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={Style.container}>
      <View style={FileStyle.groupTitle}>
        <View style={FileStyle.titleView}>
          <Image 
            style={FileStyle.image}
            source={{uri:groupPic}}
          />
          <Text style={FileStyle.title}>
            {groupTitle}
          </Text>
        </View>
        <View style={FileStyle.Icon}>
         <TouchableOpacity onPress={()=>navigation.replace("uploadFile",{groupName:groupName,grpimage:groupImage})}>
            <Image
              style={[FileStyle.iconPic,{marginRight:10}]}
              source={require('../Assets/upload.png')}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
              style={FileStyle.iconPic}
              source={require('../Assets/setting.png')}
            />
         </TouchableOpacity>
        </View>
      </View>
      <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
    </View>
  );
};
export default GroupChatUI;
