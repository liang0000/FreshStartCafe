import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StaffMenuDetailsScreen from "../pages/staff/StaffMenuDetailsScreen";
import StaffMenuScreen from "../pages/staff/StaffMenuScreen";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

const Stack = createStackNavigator();

const StaffMenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StaffMenuScreen"
        component={StaffMenuScreen}
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
        name="StaffMenuDetailsScreen"
        component={StaffMenuDetailsScreen}
        options={{ headerTitle: "Menu Details", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default StaffMenuStack;
