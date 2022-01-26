import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import FinalDetails from "../../components/FinalDetails";
import FinalOrderList from "../../components/FinalOrderList";

const HistoryDetailsScreen = ({ route }) => {
  const { order } = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <Text style={{ fontSize: 21, margin: 20, marginBottom: 5 }}>
        Order Details
      </Text>
      <ScrollView>
        {order.cart.map((product, i) => {
          return (
            <FinalOrderList
              key={i}
              picURL={product.productImage}
              name={product.productName}
              price={product.productPrice}
              quantity={product.productQuan}
            />
          );
        })}
        <View style={{ margin: 20 }}>
          <FinalDetails label="Table Number" text={order.seatNo} />
          <FinalDetails label="Total Price" text={"RM" + order.total} />
          <FinalDetails label="Message" text={order.message} />
          <FinalDetails label="Payment Method" text={order.payment} />
          <FinalDetails label="Order Time" text={order.orderTime} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryDetailsScreen;
