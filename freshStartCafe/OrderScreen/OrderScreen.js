import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Order from "./Order";

const OrdersSample = [
  {
    rank: 1,
    picURL:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421735953l/24356384.jpg",
    name: "Chicken Curry",
    price: 21.0,
  },
  {
    rank: 2,
    picURL: "https://images-na.ssl-images-amazon.com/images/I/81Pcob+ofmL.jpg",
    name: "Beef Curry",
    price: 20.0,
  },
];

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
        <Text style={styles.checkOut}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const OrderList = () => {
  const renderItem = ({ item }) => {
    return <Order picURL={item.picURL} name={item.name} price={item.price} />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <FlatList
        data={OrdersSample}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name + index}
      />
      <TotalAmount></TotalAmount>
    </SafeAreaView>
  );
};

export default OrderList;

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
  checkOut: { color: "red", fontWeight: "bold" },
});
