import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StaffMenuStack from "./StaffMenuStack";
import StaffAddMenuScreen from "../pages/staff/StaffAddMenuScreen";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const StaffBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const icons = {
            StaffMenuStack: "hamburger",
            StaffAddMenuScreen: "plus",
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
        name="StaffMenuStack"
        component={StaffMenuStack}
        options={{
          headerShown: false,
          tabBarLabel: "Menu",
        }}
      />
      <Tab.Screen
        name="StaffAddMenuScreen"
        component={StaffAddMenuScreen}
        options={{
          headerTitle: "Add Menu",
          headerTitleAlign: "center",
          tabBarLabel: "Add Menu",
        }}
      />
    </Tab.Navigator>
  );
};

export default StaffBottomTab;
