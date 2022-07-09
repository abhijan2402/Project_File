import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from './Home';
import CreateGroup from '../Screens/CreateGroup';
import CustomDrawer from './CustomDrawer';
import Profile from '../Screens/Profile';
import Invite from '../Screens/Invite';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        // <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: true }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="New Group" component={CreateGroup} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Invite" component={Invite} />
        </Drawer.Navigator>
        // </NavigationContainer>
    )
}
export default DrawerNavigator;