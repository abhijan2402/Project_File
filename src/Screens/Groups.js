import React, { useState, useEffect } from 'react';
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
import { API, Auth, Storage } from 'aws-amplify';
import 'react-native-gesture-handler';
import * as queries from '../graphql/queries';
import Style from '../Styles/Style'
import LinearGradient from 'react-native-linear-gradient';
import GroupList from '../Styles/GroupList';
const data = [
  { GroupName: "Group 1", grpDescription: "hello" },
  { GroupName: "Group 2", grpDescription: "hello" },
  { GroupName: "Group 3", grpDescription: "hello" },
  { GroupName: "Group 4", grpDescription: "hello" },
  { GroupName: "Group 5", grpDescription: "hello" },
  { GroupName: "Group 6", grpDescription: "hello" },
  { GroupName: "Group 7", grpDescription: "hello" },
  { GroupName: "Group 8", grpDescription: "hello" },
  { GroupName: "Group 9", grpDescription: "hello" },
  { GroupName: "Group 10", grpDescription: "hello" },
  { GroupName: "Group 11", grpDescription: "hello" },
  { GroupName: "Group 12", grpDescription: "hello" },
  { GroupName: "Group 13", grpDescription: "hello" },
]
const Groups = ({ navigation }) => {
  const [groupList, setGroupList] = useState([]);
  const [list, setList] = useState([])
  const listNotif = async () => {
    try {
      const list = await API.graphql({ query: queries.listGroups });
      // console.log("List is ", list.data.listGroups.items);
      setList(list.data.listGroups.items.GroupDescription)
      // console.log("hi this is the ", list)

    } catch (error) {
      console.log("error is ", error);
    }
  }
  const renderItem = ({ item }) => (
    <View style={GroupList.card} >
      <TouchableOpacity
        onPress={() => navigation.navigate("Groupchat", { groupName: item.GroupName, groupImage: item.GroupImageUrl })}
        style={GroupList.groupContainer}
      >

        <View style={GroupList.cardHeader}>
          <Image
            style={GroupList.image}
            source={{ uri: "https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" }}
          />
          <View style={GroupList.titleDesc}>
            <Text style={GroupList.grpName}>{item.GroupName}</Text>
            {/* <Text style={GroupList.footerTxt}>{item.grpDescription}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    // fetchUserGroups();
    listNotif();
  }, [groupList])
  const fetchUserGroups = async () => {
    try {
      const authedUser = await Auth.currentAuthenticatedUser();
      const userGroups = await API.graphql({
        query: queries.groupByUserName,
        variables: { userID: authedUser.attributes.email }
      })
      const groupArray = []
      for (var i = 0; i < userGroups.data.groupByUserName.items.length; i++) {
        const groupDetails = await API.graphql({
          query: queries.getGroup,
          variables: {
            id: userGroups.data.groupByUserName.items[i].groupID
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
    <View style={GroupList.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.GroupName}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default Groups;
