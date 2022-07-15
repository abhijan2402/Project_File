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
  // const images=[
  //   uri="../Assets/add-button.png",
  //   uri="../Assets/settings.png"
  // ]
//chat messaeges
  const renderItem = ({ item }) => (
    <>
      <Text style={[FileStyle.time,{alignSelf:item.userUserMessageId===user?'flex-end':'flex-start',}]}>
        {item.createdAt}
      </Text>
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
    // console.log("effect")
//check for authed user
    const authedUser=async()=>{
      const userMail=await Auth.currentAuthenticatedUser();
      setUser(userMail.attributes.email)
    }
    groupMessages();
    authedUser();
    setGroupTitle(groupName)
    setGroupPic(groupImage)
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
        groupMessagesId:groupId,
        sortDirection:"DESC"
      }
    });
    setMessageArray(userGrpMessage.data.mesageByGroupName.items)
  }
//send message to backend
  const sendMessage=async()=>{
    try {
      const date=new Date();
      const currentTime=date.toLocaleTimeString();
      if(message==null)
        throw "write message"
      const messageObject={
        message:message,
        createdAt:currentTime,
        groupMessagesId:groupId,
        userUserMessageId:user
      }
      setMessageArray([messageObject,...messageArray])
      await API.graphql({
        query:mutations.createMessage,
        variables:{
            input:messageObject
          }
      });
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
          console.log(data.value.data.onMessagebyGroupId)
          // setMessageArray([data.value.data.onMessagebyGroupId,...messageArray])
          groupMessages()
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={FileStyle.container}>
      <View style={FileStyle.groupTitle}>
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
            {/* <IconButton imageUrl={images[0].uri}
              onpress={()=>navigation.navigate("uploadFile",{groupName:groupName,grpimage:groupImage})}
            />  */}
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
      </View>
      <FlatList
          inverted
          data={[...messageArray]}
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
