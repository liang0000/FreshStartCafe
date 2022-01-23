import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import FinalDetails from "../../components/FinalDetails";
import FinalOrderList from "../../components/FinalOrderList";
import styles from "../../assets/design/styles";

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

const PaymentSuccessScreen = ({ navigation }) => {
  const renderOrder = ({ item }) => {
    return (
      <FinalOrderList
        picURL={item.picURL}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <View>
        {/* <Text style={{ fontSize: 21, alignSelf: "center" }}>
          Payment Success
        </Text> */}
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
        <View style={{ margin: 20 }}>
          <FinalDetails label="Table Number" text="" />
          <FinalDetails label="Total Price" text="" />
          <FinalDetails label="Message" text="" />
          <FinalDetails label="Payment Method" text="" />
          <FinalDetails label="Order Time" text="" />
        </View>
        <TouchableOpacity
          style={[styles.payButton, { margin: 20, marginTop: 140 }]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={{ fontSize: 16 }}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccessScreen;
