import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../pages/user/HistoryScreen";
import HistoryDetailsScreen from "../pages/user/HistoryDetailsScreen";

const Stack = createStackNavigator();

const UserHistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerTitle: "History", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="HistoryDetailsScreen"
        component={HistoryDetailsScreen}
        options={{ headerTitle: "History Details", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default UserHistoryStack;
