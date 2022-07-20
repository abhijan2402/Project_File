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
import GroupList from '../Styles/GroupList';
const Groups = ({ navigation }) => {
  const [user,setUser]=useState(null);
  const [list1, setList1] = useState([])
  const listNotif = async () => {
    try {
      const list = await API.graphql({ query: queries.listGroups });
      const meta = list.data.listGroups.items
      console.log("List is ", meta);
      setList1(list.data.listGroups.items)
      // console.log("hi this is the ", list1)

    } catch (error) {
      console.log("error is ", error);
    }
  }
  const renderItem = ({ item }) => (
    <View style={GroupList.card} >
      <TouchableOpacity
        onPress={() => navigation.navigate("Groupchat", { groupID:item.id,groupName: item.GroupName, groupImage: item.GroupImageUrl })}
        style={GroupList.groupContainer}
      >

        <View style={GroupList.cardHeader}>
          <Image
            style={GroupList.image}
            source={{ uri: "https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" }}
          />
          <View>
            <View style={GroupList.titleDesc}>
                <Text style={GroupList.grpName}>{item.GroupName}</Text>
                <Text style={GroupList.timeText}>{item.lastSeenMessege==null?null:item.lastSeenMessege.createdAt}</Text>
            </View>
              <View style={GroupList.titleDesc}>
              <Text style={GroupList.messageTxt}>
                {
                  item.lastSeenMessege==null?null:
                  `${item.lastSeenMessege.userUserMessageId==user?`You`:item.lastSeenMessege.userUserMessageId}:${item.lastSeenMessege.message}`
                }
              </Text>
            </View>
          </View>
         </View>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    const authedUser=async()=>{
      const userMail=await Auth.currentAuthenticatedUser();
      // console.log(userMail.attributes.name)
      setUser(userMail.attributes.name)
    }
    authedUser();
    listNotif();
  }, [])

  return (
    <View style={GroupList.container}>
      <FlatList
        data={list1}
        renderItem={renderItem}
        keyExtractor={item => item.GroupDescription}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default Groups;
