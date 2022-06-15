import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from './Home';
import AddFile from './AddFile';
import Lambda from './Lambda';
const Drawer=createDrawerNavigator();
const Main=()=>{
    return(
        // <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="addFile" component={AddFile} />
                <Drawer.Screen name="lambda" component={Lambda} />
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}
export default Main;