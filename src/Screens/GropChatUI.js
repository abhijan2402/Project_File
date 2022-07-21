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
import * as mutations from '../graphql/mutations';
import FileStyle from '../Styles/FileStyle';
import IconButton from '../Components/IconButton';
import GroupChatHeader from '../Components/GroupChatHeader';
import ChatInput from '../Components/ChatInput';
import upDateGroupLastSeenMessage from '../Server/upDateGroupLastSeenMessage';

const image=require("../Assets/add-button.png");
const settingimage=require('../Assets/settings.png');
const arrowButton=require('../Assets/arrows.png');
const menuButton=require('../Assets/menu1.png');
const sendButton=require('../Assets/send.png');

const GroupChatUI=({route,navigation})=>{
  const {groupID,groupName,groupImage} = route.params;
  const [groupTitle,setGroupTitle]=useState(null);
  const [groupPic,setGroupPic]=useState(null);
  const [GroupRoomID,setRoomID]=useState(null);
  const [message,setMessage]=useState(null)
  const [clicked,setClicked]=useState(false);
  const [search,setSearch]=useState(false);
  const [user,setUser]=useState(null);
  const [messageArray,setMessageArray]=useState([])
//chat messaeges
  const renderItem = ({ item }) => (
    <>
      {/* <Text style={[FileStyle.time,{alignSelf:item.userUserMessageId===user?'flex-end':'flex-start',}]}>
        {item.createdAt}
      </Text> */}
      <View 
        style={[
          FileStyle.messageContainer,
          {
            alignSelf:item.userUserMessageId===user?'flex-end':'flex-start',
          }
        ]}    
      >
        <Text style={[FileStyle.title,{
          alignSelf:item.userUserMessageId===user?'flex-end':'flex-start',
        }]}>
          {item.message}
        </Text>
      </View >
      
    </>
  );

  useEffect(()=>{
    // console.log(groupID)
//check for authed user
    const authedUser=async()=>{
      const userMail=await Auth.currentAuthenticatedUser();
      // console.log(userMail.attributes.name)
      setUser(userMail.attributes.name)
    }
    groupMessages();
    authedUser();
    setGroupTitle(groupName);
    setGroupPic(groupImage);
    setRoomID(groupID)
    return()=>{
      setGroupTitle(null)
      setGroupPic(null)
    }
  },[])
  useEffect(()=>{
    // subscribe();
  },[])

  const groupMessages=async()=>{
    const userGrpMessage=await API.graphql({
      query:queries.mesageByGroupName,
      variables:{
        groupMessagesId:groupID,
        sortDirection:"DESC"
      }
    });
    setMessageArray(userGrpMessage.data.mesageByGroupName.items)
  } 
//send message to backend
  const sendMessage=async()=>{
    try {
      const date=new Date();
      const currentTime=date.getTime();
      if(message==null)
        throw "write message"
      const messageObject={
        message:message,
        createdAt:currentTime,
        groupMessagesId:GroupRoomID,
        userUserMessageId:user
      }
      setMessageArray([messageObject,...messageArray]);
      const messadeData=await API.graphql({
        query:mutations.createMessage,
        variables:{
            input:messageObject
          }
      });
      // console.log(messadeData.data.createMessage.id);
      await upDateGroupLastSeenMessage(GroupRoomID,messadeData.data.createMessage.id);
    } catch (error) {
      console.warn(error);
    }
  }
//subscribe user for messages
  const subscribe=async()=>{
    console.log('nidsa')
    try {
      await API.graphql({
        query:subscriptions.onMessagebyGroupId,
        variables:{groupMessagesId:groupID}
      }).subscribe({
        next: data => {
          console.log(data.value.data.onMessagebyGroupId)
          // setMessageArray([data.value.data.onMessagebyGroupId,...messageArray])
          // groupMessages()
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={FileStyle.container}>
      <View style={FileStyle.groupTitle}>
        { clicked ? null : <GroupChatHeader groupTitle={groupTitle} /> }
        <View style={[FileStyle.Icon,clicked?{width:'100%'}:null]}>
         {clicked?
            <>
              <IconButton imageUrl={image} onpress={()=>navigation.navigate("uploadFile",{groupName:groupName,grpimage:groupImage})}/> 
              <IconButton imageUrl={settingimage} />
            </>
            :null
          }
          <IconButton imageUrl={clicked?arrowButton:menuButton} onpress={()=>setClicked(!clicked)}/> 
        </View>
      </View>
      <FlatList
          inverted
          data={[...messageArray]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
      <View  style={FileStyle.chatIPStyle}>
        <ChatInput getGroupMessage={setMessage} />
        <IconButton imageUrl={sendButton} onpress={()=>sendMessage()}/>
      </View>    
    </View>
  );
};
export default GroupChatUI;
