import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CheckOutList from "./CheckOutScreen";
import HistoryList from "./HistoryScreen";
import CardPayment from "./CardPaymentScreen";
import PaymentSuccessList from "./PaymentSuccessScreen";

const Stack = createStackNavigator();

export default function App() {
  return <CardPayment />;
}
