import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import UserMenuStack from "./UserMenuStack";
import UserOrderStack from "./UserOrderStack";
import UserHistoryStack from "./UserHistoryStack";

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
        component={UserOrderStack}
        options={{
          headerShown: false,
          tabBarLabel: "Order",
        }}
      />
      <Tab.Screen
        name="History"
        component={UserHistoryStack}
        options={{
          headerShown: false,
          tabBarLabel: "History",
        }}
      />
    </Tab.Navigator>
  );
};

export default tabNav;
