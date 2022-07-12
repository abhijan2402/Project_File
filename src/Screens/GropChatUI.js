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
import dummyChatData from '../Data';
const GroupChatUI=({route,navigation})=>{
  const {groupName,groupImage} = route.params;
  const [groupId,setGroupId]=useState("7c07a7dc-babf-44d1-922d-a448432a939d");
  const [groupTitle,setGroupTitle]=useState(null);
  const [groupPic,setGroupPic]=useState(null);
  const [message,setMessage]=useState(null)
  const [clicked,setClicked]=useState(false);
  const [search,setSearch]=useState(false);
  const [user,setUser]=useState(null);
  const [messageArray,setMessageArray]=useState([])
  const renderItem = ({ item }) => (
    <>
      {/* <Text style={[FileStyle.time,{alignSelf:item.user===user?'flex-end':'flex-start',}]}>
        {item.createdAt}
      </Text> */}
      <View 
        style={[
          FileStyle.messageContainer,
          {
            alignSelf:item.user===user?'flex-end':'flex-start',
            borderTopRightRadius:item.user===user?5:40,
            borderBottomRightRadius:item.user===user?5:40,
            borderTopLeftRadius:item.user===user?40:5,
            borderBottomLeftRadius:item.user===user?40:5,
            backgroundColor:item.user===user?"#59B4FF":"#CA7AFF"
          }
        ]}    
      >
        <Text style={FileStyle.title}>
          {item.message}
        </Text>
      </View >
      
    </>
  );

  useEffect(()=>{
    console.log("effect")
    authedUser()
    setGroupTitle(groupName)
    setGroupPic(groupImage)
    // subscribe();
    return()=>{
      setGroupTitle(null)
      setGroupPic(null)
    }
  },[])
//authedUser
  const authedUser=async()=>{
    const userMail=await Auth.currentAuthenticatedUser();
    setUser(userMail.attributes.email)
  }
//send message to backend
  const sendMessage=async()=>{
    try {
      const date=new Date();
      const currentTime=date.getHours()+":"+date.getMinutes();
      if(message==null)
        throw "write message"
      let messageObject={
        message:message,
        user:user
      }
      const messageData=await API.graphql({
        query:mutations.createMessage,
        variables:{
          input:{
            message:messageObject,
            createdAt:currentTime,
            groupMessagesId:groupId
          }
        }
      });
      console.log(messageData);
      setMessageArray([...messageArray,messageObject])
      setMessage(null)

    } catch (error) {
      console.warn(error);
    }
  }
//subscribe user for messages
  const subscribe=async()=>{
    try {
      await API.graphql({
        query:subscriptions.onMessagebyGroupId,
        variables:{groupMessagesId:groupId}
      }).subscribe({
        next: data => {
          console.log(data.value.data.onMessagebyGroupId.message)
          setMessageArray([...messageArray,data.value.data.onMessagebyGroupId])
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={FileStyle.container}>
      <View style={FileStyle.groupTitle}>
        {search?
          <TextInput
            style={FileStyle.searchInput}
            placeholder={"Search..."}
            placeholderTextColor={"black"}
            autoFocus={true}
            autoCorrect={true}
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
        <View style={[FileStyle.Icon,clicked?{width:'100%'}:null]}>
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
      </View>
      <FlatList
          inverted
          data={[...messageArray].reverse()}
          renderItem={renderItem}
          keyExtractor={item => Math.random()*10000}
      />
      <View  style={FileStyle.chatIPStyle}>
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
      </View>    
    </View>
  );
};
export default GroupChatUI;
