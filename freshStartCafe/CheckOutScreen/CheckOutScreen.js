import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { FinalOrder, FinalDetails } from "../PaymentSuccessScreen/FinalOrder";

const CheckOutSample = [
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

const tableNum = 7;

const TotalAmount = () => {
  const totalPrice = 45;

  return (
    <View style={styles.totalAmount}>
      <Text style={styles.totalPrice}>Total: RM{totalPrice}</Text>
      <TouchableOpacity
        style={{
          padding: 15,
          borderLeftWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Text style={styles.placeOrder}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const CheckOutList = () => {
  const renderItem = ({ item }) => {
    return (
      <FinalOrder
        picURL={item.picURL}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  };

  const [message, onChangeMessage] = useState("");
  const [payment, setPayment] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 5 }}>
        Table No {tableNum}
      </Text>
      <FlatList
        data={CheckOutSample}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name + index}
      />
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Text style={{ flex: 1 }}>Message:</Text>
        <TextInput
          onChangeText={onChangeMessage}
          value={message}
          placeholder="Please leave a message..."
        />
      </View>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Text style={{ flex: 1 }}>Payment Option</Text>
        <RNPickerSelect
          onValueChange={(itemValue) => setPayment(itemValue)}
          items={[
            { label: "Credit / Debit Card", value: "CDC" },
            { label: "Pay by Cash", value: "PbC" },
          ]}
        />
      </View>
      <TotalAmount></TotalAmount>
    </SafeAreaView>
  );
};

export default CheckOutList;

const styles = StyleSheet.create({
  totalAmount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 1,
    height: 50,
    margin: 2,
  },
  totalPrice: {
    fontWeight: "bold",
    color: "red",
    marginRight: 10,
  },
  placeOrder: { color: "red", fontWeight: "bold" },
});
