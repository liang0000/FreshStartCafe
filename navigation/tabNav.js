import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMenuStack from "./UserMenuStack";
import OrderScreen from "../pages/user/Order";
import HistoryScreen from "../pages/user/History";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

//user bottom tab
const tabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const icons = {
            Menu: "hamburger",
            Order: "clipboard-list",
            History: "hourglass-half",
          };
          return (
            <Icon
              name={icons[route.name]}
              type="font-awesome-5"
              color="#000"
              size={18}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Menu"
        component={UserMenuStack}
        options={{
          headerShown: false,
          tabBarLabel: "Menu",
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Order",
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarLabel: "History",
        }}
      />
    </Tab.Navigator>
  );
};

export default tabNav;
