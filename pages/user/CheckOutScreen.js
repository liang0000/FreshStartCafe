import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FinalOrderList from "../../components/FinalOrderList";
import TotalAmount from "../../components/TotalAmount";
import { useFirebase } from "../../firebase/FirebaseContext";

const CheckOutScreen = ({ route, navigation }) => {
  const { cart, total } = route.params;
  const [message, setMessage] = useState("");
  const [payment, setPayment] = useState("");
  const { seatNoID } = useFirebase();

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          padding: 15,
          paddingBottom: 0,
        }}
      >
        Table No {seatNoID}
      </Text>

      <ScrollView>
        {cart.length !== 0
          ? cart.map((cart, i) => {
              return (
                <FinalOrderList
                  key={i}
                  picURL={cart.productImage}
                  name={cart.productName}
                  price={cart.productPrice}
                  quantity={cart.productQuan}
                />
              );
            })
          : null}
        <View style={{ margin: 15 }}>
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <Text style={{ flex: 1 }}>Message:</Text>

            <TextInput
              onChangeText={(message) => setMessage(message)}
              value={message}
              placeholder="Please leave a message..."
              placeholderTextColor="grey"
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1 }}>Payment Option:</Text>

            <RNPickerSelect
              placeholder={{
                label: "Select an payment",
                value: null,
              }}
              style={{ placeholder: { color: "grey" } }}
              onValueChange={(itemValue) => setPayment(itemValue)}
              items={[
                { label: "Credit / Debit Card", value: "CDC" },
                { label: "Pay by Cash", value: "PbC" },
              ]}
            />
          </View>
        </View>
      </ScrollView>

      <TotalAmount totalPrice={total} text="Place Order" />
    </SafeAreaView>
  );
};

export default CheckOutScreen;
