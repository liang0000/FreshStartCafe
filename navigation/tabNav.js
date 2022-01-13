import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMenu from "../pages/user/menu";
import OrderScreen from "../pages/user/order";
import HistoryScreen from "../pages/user/menu";

const Tab = createBottomTabNavigator();

const tabNav = () => {
  return (
    <Tab.Navigator>
      {/* User */}
      <Tab.Screen name="menu" component={UserMenu} />
      <Tab.Screen name="order" component={OrderScreen} />
      <Tab.Screen name="history" component={HistoryScreen} />
      {/* Admin */}
    </Tab.Navigator>
  );
};

export default tabNav;
