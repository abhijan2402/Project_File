import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import Groups from '../Screens/Groups';
import GroupChatUI from '../Screens/GropChatUI';
import UploadFile from '../Screens/AddFile';
import Invite from '../Screens/Invite';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeStack = createNativeStackNavigator();
const Home = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} >
      <HomeStack.Screen name="Groups" component={Groups} />
      <HomeStack.Screen name="Groupchat" component={GroupChatUI} />
      <HomeStack.Screen name="uploadFile" component={UploadFile} />
      <HomeStack.Screen name="Invite" component={Invite} />
    </HomeStack.Navigator>
  );
};
export default Home;
