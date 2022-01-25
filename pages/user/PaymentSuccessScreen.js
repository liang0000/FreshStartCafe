import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FinalDetails from "../../components/FinalDetails";
import FinalOrderList from "../../components/FinalOrderList";
import styles from "../../assets/design/styles";
import { useFirebase } from "../../firebase/FirebaseContext";

const PaymentSuccessScreen = ({ route, navigation }) => {
  const { cart, seatNo, payment, message, total } = route.params;
  const { setCart } = useFirebase();

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <Text style={{ fontSize: 35, alignSelf: "center", marginTop: 70 }}>
        Thank You
      </Text>
      <Text style={{ fontSize: 14, alignSelf: "center", marginBottom: 50 }}>
        for making order with us
      </Text>
      <Text style={{ fontSize: 21, marginLeft: 20, marginBottom: 10 }}>
        Order Details
      </Text>
      <ScrollView>
        {cart.map((cart, i) => {
          return (
            <FinalOrderList
              key={i}
              picURL={cart.productImage}
              name={cart.productName}
              price={cart.productPrice}
              quantity={cart.productQuan}
            />
          );
        })}
        <View style={{ margin: 20 }}>
          <FinalDetails label="Table Number" text={seatNo} />
          <FinalDetails label="Total Price" text={"RM" + total} />
          <FinalDetails label="Message" text={message} />
          <FinalDetails label="Payment Method" text={payment} />
          <FinalDetails label="Order Time" text="NOW" />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.popToTop(setCart([]))}
      >
        <Text style={{ fontSize: 16 }}>Back to Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentSuccessScreen;
