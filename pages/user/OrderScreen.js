import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import OrderList from "../../components/OrderList";
import TotalAmount from "../../components/TotalAmount";

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

const OrderScreen = () => {
  const renderItem = ({ item }) => {
    return <OrderList picURL={item.picURL} name={item.name} price={item.price} />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <FlatList
        data={OrdersSample}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name + index}
      />
      <TotalAmount totalPrice="55" text="Check Out" onPress={}/>
    </SafeAreaView>
  );
};

export default OrderScreen;
