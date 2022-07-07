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
import FileStyle from '../Styles/FileStyle';
import LinearGradient from 'react-native-linear-gradient';
const GroupChatUI=({route,navigation})=>{
  const {groupName,groupImage} = route.params;
  const [list,setList]=useState([]);
  const [groupTitle,setGroupTitle]=useState(null);
  const [groupPic,setGroupPic]=useState(null);

  const [clicked,setClicked]=useState(false);
  const [search,setSearch]=useState(false);
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
    <View style={FileStyle.container}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#85FFDB', '#C2FFED', '#D0F9ED']} style={FileStyle.groupTitle}>
        {search?
          <TextInput
            style={FileStyle.searchInput}
            placeholder={"Search..."}
            placeholderTextColor={"black"}
          />:
          clicked?null:<View style={FileStyle.titleView}>
            <Image 
              style={FileStyle.image}
              source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imXJMeK9b42t8JBjKxYP2zJd8MVrbVNEAg&usqp=CAU"}}
            />
            <Text style={FileStyle.title}>
              {groupTitle}
            </Text>
          </View>
        }
        <View style={FileStyle.Icon}>
         {clicked?
          <>
            <TouchableOpacity>
              <Image
                style={[FileStyle.iconPic,{marginRight:10}]}
                source={require('../Assets/chat.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("uploadFile",{groupName:groupName,grpimage:groupImage})}>
                <Image
                  style={[FileStyle.iconPic,{marginRight:10}]}
                  source={require('../Assets/add-button.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image
                  style={[FileStyle.iconPic,{marginRight:10}]}
                  source={require('../Assets/settings.png')}
                />
            </TouchableOpacity>
          </>
          :
          <TouchableOpacity onPress={()=>setSearch(true)} >
              <Image
                style={[FileStyle.iconPic,{marginRight:10}]}
                source={require('../Assets/searching.png')}
              />
          </TouchableOpacity>
        }
        {search?
          <TouchableOpacity onPress={()=>setSearch(false)}>
            <Image
              style={FileStyle.iconPic}
              source={require('../Assets/arrows.png')}
            />
          </TouchableOpacity>:
          <TouchableOpacity onPress={()=>setClicked(!clicked)}>
              <Image
                style={FileStyle.iconPic}
                source={clicked?require('../Assets/arrows.png'):require('../Assets/menu1.png')}
              />
          </TouchableOpacity>
        }
        </View>
      </LinearGradient>
      {/* <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      /> */}
    </View>
  );
};
export default GroupChatUI;
