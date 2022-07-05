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
  Image,
  ImageBackground
} from 'react-native';
import { API, Auth , Storage } from 'aws-amplify';
import 'react-native-gesture-handler';
import * as queries from '../graphql/queries';
import Style from '../Styles/Style'
import LinearGradient from 'react-native-linear-gradient';
import GroupList from '../Styles/GroupList';
const data=[
  {GroupName:"Group 1",grpDescription:"hello"},
  {GroupName:"Group 2",grpDescription:"hello"},
  {GroupName:"Group 3",grpDescription:"hello"},
  {GroupName:"Group 4",grpDescription:"hello"},
  {GroupName:"Group 5",grpDescription:"hello"},
  {GroupName:"Group 6",grpDescription:"hello"},
  {GroupName:"Group 7",grpDescription:"hello"},
  {GroupName:"Group 8",grpDescription:"hello"},
  {GroupName:"Group 9",grpDescription:"hello"},
  {GroupName:"Group 10",grpDescription:"hello"},
  {GroupName:"Group 11",grpDescription:"hello"},
  {GroupName:"Group 12",grpDescription:"hello"},
  {GroupName:"Group 13",grpDescription:"hello"},
]
const Groups=({navigation})=>{
  const [groupList,setGroupList]=useState([]);
  const renderItem = ({ item }) => (
    <View style={GroupList.card} >
      <TouchableOpacity 
       onPress={()=>navigation.navigate("Groupchat",{groupName:item.GroupName,groupImage:item.GroupImageUrl})}
        style={GroupList.groupContaier} 
      >
        <View style={GroupList.cardHeader}>
          <Image 
              style={GroupList.image}
              source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imXJMeK9b42t8JBjKxYP2zJd8MVrbVNEAg&usqp=CAU"}} 
          />
          <Text style={GroupList.grpName}>{item.GroupName}</Text>
        </View>
        <LinearGradient colors={['#BAF3FF', '#F0FCFF', '#BAF3FF']} style={GroupList.cardFooter}>
          <Text style={GroupList.footerTxt}>Description....</Text>
        </LinearGradient >
      </TouchableOpacity>
    </View>
  );
  
  useEffect(()=>{
    // fetchUserGroups();
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
    <View>
     <ImageBackground
       style={GroupList.container}
       source={require('../Assets/background.png')} 
       resizeMode="cover"
     >
      <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.GroupName}
              numColumns={2}
        />
     </ImageBackground>
    </View>
  );
};
export default Groups;
