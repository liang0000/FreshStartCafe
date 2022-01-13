import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TableScreen from './pages/user/tableScreen';
import StaffLogin from './pages/staff/staffLoginScreen';
import StaffMenuScreen from './pages/staff/staffMenuScreen';
import TabNavigation from './navigation/tabNav';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tableScreen">
        <Stack.Screen name="tableScreen" component={TableScreen} options={{headerShown:false}}/>
        <Stack.Screen name="tabNav" component={TabNavigation}/>
        <Stack.Screen name="staffLoginScreen" component={StaffLogin}  options={{headerShown:false}}/>
        <Stack.Screen name="staffMenuScreen" component={StaffMenuScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

