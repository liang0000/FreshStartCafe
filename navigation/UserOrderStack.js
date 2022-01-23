import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../pages/user/OrderScreen";
import CheckOutScreen from "../pages/user/CheckOutScreen";
import CardPaymentScreen from "../pages/user/CardPaymentScreen";
import PaymentSuccessScreen from "../pages/user/PaymentSuccessScreen";

const Stack = createStackNavigator();

const UserOrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerTitle: "Order", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{ headerTitle: "Checkout", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="CardPaymentScreen"
        component={CardPaymentScreen}
        options={{ headerTitle: "Add Card", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="PaymentSuccessScreen"
        component={PaymentSuccessScreen}
        options={{ headerTitle: "Payment Success", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default UserOrderStack;
