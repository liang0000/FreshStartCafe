import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../pages/user/Menu";
import UserMenuDetailsScreen from "../pages/user/UserMenuDetailsScreen";

const Stack = createStackNavigator();

const UserMenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerTitle: "Menu", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="UserMenuDetailsScreen"
        component={UserMenuDetailsScreen}
        options={{ headerTitle: "Menu Details", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default UserMenuStack;
