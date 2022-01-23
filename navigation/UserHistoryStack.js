import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../pages/user/HistoryScreen";
import HistoryDetailsScreen from "../pages/user/HistoryDetailsScreen";
import { Platform, SafeAreaView, StatusBar, Text } from "react-native";

const Stack = createStackNavigator();

const UserHistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
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
                <Text style={{ fontSize: 22 }}>History</Text>
              </SafeAreaView>
            );
          },
        }}
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
