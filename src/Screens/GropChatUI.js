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
      <LinearGradient colors={['#4FCBF8', '#F0FCFF', '#4FCBF8']}
        style={[
          FileStyle.messageContainer,
          {
            alignSelf:item.user===user?'flex-end':'flex-start',
            borderTopRightRadius:item.user===user?5:40,
            borderBottomRightRadius:item.user===user?5:40,
            borderTopLeftRadius:item.user===user?40:5,
            borderBottomLeftRadius:item.user===user?40:5
          }
        ]}    
      >
        <Text style={FileStyle.title}>
          {item.message}
        </Text>
      </LinearGradient >
      
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
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#85FFDB', '#C2FFED', '#D0F9ED']} style={FileStyle.groupTitle}>
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
            <TouchableOpacity >
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
      </LinearGradient>
      <FlatList
          inverted
          data={[...messageArray].reverse()}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#85FFDB', '#C2FFED', '#D0F9ED']} style={FileStyle.chatIPStyle}>
        <TextInput
            placeholder={"Message..."}
            placeholderTextColor={"black"}
            style={FileStyle.chatInput}
            onChangeText={(message)=>setMessage(message)}
        />
       <TouchableOpacity onPress={()=>sendMessage()}>
        <Image
            style={FileStyle.sentIcon}
            source={require('../Assets/send.png')}
          />
       </TouchableOpacity>
      </LinearGradient>    
    </View>
  );
};
export default GroupChatUI;
