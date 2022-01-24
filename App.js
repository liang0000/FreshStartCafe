import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FirebaseProvider } from "./firebase/FirebaseContext";
import TableScreen from "./pages/user/tableScreen";
import StaffLoginScreen from "./pages/staff/StaffLoginScreen";
import TabNavigation from "./navigation/tabNav";
import StaffBottomTab from "./navigation/StaffBottomTab";

const Stack = createStackNavigator();

const App = () => {
  return (
    <FirebaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="tableScreen">
          <Stack.Screen
            name="tableScreen"
            component={TableScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="tabNav"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StaffLoginScreen"
            component={StaffLoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StaffBottomTab"
            component={StaffBottomTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseProvider>
  );
};

export default App;
