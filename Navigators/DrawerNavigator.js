import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Profile from '../Screens/Profile'
import BottomTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {BottomTabNavigator}></Drawer.Screen>
            <Drawer.Screen name = "Profile" component = {Profile}></Drawer.Screen>
        </Drawer.Navigator>
        )
}

export default DrawerNavigator;