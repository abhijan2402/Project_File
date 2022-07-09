import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ConfirmSignIn from '../Screens/ConfirmSignUp';
import ForgotPassword from '../Screens/ForgotPasword';
import NewPassword from '../Screens/NewPassword';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();
const Authentication = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn" >
      <>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="confirmSignUp" component={ConfirmSignIn} />
        <Stack.Screen name="forgetpassword" component={ForgotPassword} />
        <Stack.Screen name="newPassword" component={NewPassword} />
      </>
    </Stack.Navigator>
  );
}

export default Authentication;
