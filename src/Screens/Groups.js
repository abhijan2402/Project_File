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
import { API, Auth , Storage } from 'aws-amplify';
import 'react-native-gesture-handler';
import * as queries from '../graphql/queries';
import Style from '../Styles/Style'
import GroupList from '../Styles/GroupList';
const Groups=({navigation})=>{
  const [groupList,setGroupList]=useState([]);
  const renderItem = ({ item }) => (
    <View >
      <TouchableOpacity 
       onPress={()=>navigation.navigate("Groupchat",{groupName:item.GroupName,groupImage:item.GroupImageUrl})}
        style={GroupList.groupContaier} 
      >
        <Image 
            style={GroupList.image}
            source={{uri:item.GroupImageUrl}}
        />
        <Text style={GroupList.grpName}>{item.GroupName}</Text>
      </TouchableOpacity>
    </View>
  );
  
  useEffect(()=>{
    fetchUserGroups();
  },[groupList])
  const fetchUserGroups=async()=>{
    try {
      const authedUser=await Auth.currentAuthenticatedUser();
      const userGroups=await API.graphql({
        query:queries.groupByUserName,
        variables:{userID:authedUser.attributes.email}
      })
      const groupArray=[]
      for(var i=0;i<userGroups.data.groupByUserName.items.length;i++){
        const groupDetails=await API.graphql({
          query:queries.getGroup,
          variables:{
            id:userGroups.data.groupByUserName.items[i].groupID
          }
        })
        groupArray.push(groupDetails.data.getGroup)
      }
      setGroupList(groupArray)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={Style.container}>
      <FlatList
          data={groupList}
          renderItem={renderItem}
          keyExtractor={item => item.GroupName}
      />
    </View>
  );
};
export default Groups;
