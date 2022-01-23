import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StaffMenuDetailsScreen from "../pages/staff/StaffMenuDetailsScreen";
import StaffMenuScreen from "../pages/staff/StaffMenuScreen";
import StaffUpdateMenuScreen from "../pages/staff/StaffUpdateMenuScreen";

const Stack = createStackNavigator();

const StaffMenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StaffMenuScreen"
        component={StaffMenuScreen}
        options={{ headerTitle: "Menu", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="StaffMenuDetailsScreen"
        component={StaffMenuDetailsScreen}
        options={{ headerTitle: "Menu Details", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="StaffUpdateMenuScreen"
        component={StaffUpdateMenuScreen}
        options={{ headerTitle: "Update Menu", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default StaffMenuStack;
