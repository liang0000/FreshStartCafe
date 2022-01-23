import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TextInput,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FinalOrderList from "../../components/FinalOrderList";
import TotalAmount from "../../components/TotalAmount";

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


const CheckOutScreen = () => {
  const tableNum = 7;
  const [message, onChangeMessage] = useState("");
  const [payment, setPayment] = useState("");

  const renderItem = ({ item }) => {
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
      <TotalAmount totalPrice="55" text="Place Order" onPress={}/>
    </SafeAreaView>
  );
};

export default CheckOutScreen;
