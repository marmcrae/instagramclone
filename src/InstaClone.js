
import 'react-native-gesture-handler';
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  MainFeed,
  Login,
  Register,
  Camera,
  Profile
} from "./components/screens";
import { NavigationContainer } from '@react-navigation/native';
import {
  createSwitchNavigator,
  createStackNavigator
} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator();

function TabNav() {
  return (
    <Tabs.Navigator
      initialRouteName="MainFeed"
      screenOptions={{ gestureEnabled: false }}
    >
      <Tabs.Screen
        name="Camera"
        component={Camera}
     
      />
      <Tabs.Screen
        name="MainFeed"
        component={MainFeed}
       
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        initialParams={{ email: '' }, { password: '' }}
      />
    </Tabs.Navigator>
  );
}
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        initialParams={{ name: 'Register'}}
      />
      <Stack.Screen
      name="MainFeed"
      component={MainFeed, TabNav}
     
    />
      
    </Stack.Navigator>
  );
}


class InstaClone extends Component {
  storeId() {
    console.log("calling");
  }

  
  render() {
    return <MainStack/>
       

  }
}

export default InstaClone;
