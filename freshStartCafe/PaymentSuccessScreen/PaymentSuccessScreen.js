import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { FinalOrder, FinalDetails } from "./FinalOrder";

const PaymentSuccessSample = [
  {
    rank: 1,
    picURL:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421735953l/24356384.jpg",
    name: "Chicken Curry",
    price: 21.0,
    quantity: 3,
  },
  {
    rank: 2,
    picURL: "https://images-na.ssl-images-amazon.com/images/I/81Pcob+ofmL.jpg",
    name: "Beef Curry",
    price: 20.0,
    quantity: 2,
  },
];

const DetailsSample = [
  {
    id: "0001",
    tableNumber: 5,
    totalPrice: 35,
    message: "Please add more sourse",
    paymentMethod: "Credit / Debit Card",
    orderTime: "23-11-2021 16:04",
  },
];

const PaymentSuccessList = ({ navigation }) => {
  const renderOrder = ({ item }) => {
    return (
      <FinalOrder
        picURL={item.picURL}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  };

  const renderDetails = ({ item }) => {
    return (
      <FinalDetails
        tableNumber={item.tableNumber}
        totalPrice={item.totalPrice}
        message={item.message}
        paymentMethod={item.paymentMethod}
        orderTime={item.orderTime}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <View>
        <Text style={{ fontSize: 21, alignSelf: "center" }}>
          Payment Success
        </Text>
        <Text style={{ fontSize: 35, alignSelf: "center", marginTop: 70 }}>
          Thank You
        </Text>
        <Text style={{ fontSize: 14, alignSelf: "center", marginBottom: 50 }}>
          for making order with us
        </Text>
        <Text style={{ fontSize: 21, marginLeft: 20, marginBottom: 10 }}>
          Order Details
        </Text>
        <FlatList
          data={PaymentSuccessSample}
          renderItem={renderOrder}
          keyExtractor={(item, index) => item.rank + index}
        />
        <FlatList
          data={DetailsSample}
          renderItem={renderDetails}
          keyExtractor={(item, index) => item.id + index}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={{ fontSize: 16 }}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccessList;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 20,
    marginTop: 140,
  },
});
