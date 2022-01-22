import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../pages/user/Menu";
import UserMenuDetailsScreen from "../pages/user/UserMenuDetailsScreen";
import { Platform, SafeAreaView, StatusBar, Text } from "react-native";

const Stack = createStackNavigator();

const UserMenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          header: ({ navigation }) => {
            return (
              <SafeAreaView
                style={{
                  paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
                  width: "100%",
                  height: 75,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  shadowOpacity: 0.8,
                  shadowOffset: { width: 10, height: 10 },
                  shadowRadius: 10,
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 22 }}>Menu</Text>
              </SafeAreaView>
            );
          },
        }}
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
