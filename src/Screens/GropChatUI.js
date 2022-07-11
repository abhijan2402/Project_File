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
import dummyChatData from '../Data';
import Groupinfo from './groupinfo';
const GroupChatUI=({route,navigation})=>{
  const {groupName,groupImage} = route.params;
  const [list,setList]=useState([]);
  const [groupTitle,setGroupTitle]=useState(null);
  const [groupPic,setGroupPic]=useState(null);
  const [message,setMessage]=useState(null)
  const [clicked,setClicked]=useState(false);
  const [search,setSearch]=useState(false);
  const [user,setUser]=useState("chirag")
  const [messageArray,setMessageArray]=useState(dummyChatData)
  const renderItem = ({ item }) => (
    <>
      <Text style={[FileStyle.time,{alignSelf:item.user===user?'flex-end':'flex-start',}]}>
        {item.timeAt}
      </Text>
      <View 
        style={[
          FileStyle.messageContainer,
          {
            alignSelf:item.user===user?'flex-end':'flex-start',
            borderTopRightRadius:item.user===user?5:40,
            borderBottomRightRadius:item.user===user?5:40,
            borderTopLeftRadius:item.user===user?40:5,
            borderBottomLeftRadius:item.user===user?40:5,
            backgroundColor:"#2D9BFF"
          }
        ]}    
      >
        <Text style={[FileStyle.title,{color:"white"}]}>
          {item.message}
        </Text>
      </View >
      
    </>
  );

  useEffect(()=>{
    setGroupTitle(groupName)
    setGroupPic(groupImage)
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
  const sendMessage=()=>{
    try {
      const date=new Date();
      const currentTime=date.getHours()+":"+date.getMinutes();
      if(message==null)
        throw "write message"
      let messageObject={
        id:Math.random()*1000,
        message:message,
        timeAt:currentTime,
        user:"chirag"
      }
      
      setMessageArray([...messageArray,messageObject])
      console.log(date);
      setMessage(null)
    } catch (error) {
      console.warn(error);
    }
  }
  return (
    <View style={FileStyle.container}>
      <View  style={FileStyle.groupTitle}>
        {
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
        <View style={[FileStyle.Icon,clicked?{width:'100%'}:null]}>
         {clicked?
          <>
            <TouchableOpacity onPress={()=>navigation.navigate("uploadFile",{groupName:groupName,grpimage:groupImage})}>
                <Image
                  style={[FileStyle.iconPic,{marginRight:10}]}
                  source={require('../Assets/add-button.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("groupinfo")} >
                <Image
                  style={[FileStyle.iconPic,{marginRight:10}]}
                  source={require('../Assets/settings.png')}
                />
            </TouchableOpacity>
          </>
          :null
        }
        <TouchableOpacity onPress={()=>setClicked(!clicked)}>
            <Image
              style={FileStyle.iconPic}
              source={clicked?require('../Assets/arrows.png'):require('../Assets/menu1.png')}
            />
        </TouchableOpacity>
        </View>
      </View>
      <FlatList
          inverted
          data={[...messageArray].reverse()}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
      <View style={FileStyle.chatIPStyle}>
        <TextInput
            placeholder={"Message..."}
            placeholderTextColor={"black"}
            style={FileStyle.chatInput}
            onChangeText={(message)=>setMessage(message)}
            multiline={true}
        />
       <TouchableOpacity onPress={()=>sendMessage()}>
        <Image
            style={FileStyle.sentIcon}
            source={require('../Assets/send.png')}
          />
       </TouchableOpacity>
      </View>    
    </View>
  );
};
export default GroupChatUI;
