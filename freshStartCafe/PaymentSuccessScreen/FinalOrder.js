import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const FinalOrder = (props) => {
  return (
    <View style={styles.finalOrder}>
      <Image style={styles.pic} source={props.picURL}></Image>
      <View style={styles.info}>
        <Text>{props.name}</Text>
        <Text>RM {props.price}</Text>
      </View>
      <Text
        style={{
          alignSelf: "flex-end",
        }}
      >
        x{props.quantity}
      </Text>
    </View>
  );
};

const FinalDetails = (props) => {
  return (
    <View style={{ margin: 20 }}>
      <View style={styles.viewRow}>
        <Text style={{ flex: 1 }}>Table Number</Text>
        <Text>{props.tableNumber}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={{ flex: 1 }}>Total Price</Text>
        <Text>RM {props.totalPrice}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={{ flex: 1 }}>Message</Text>
        <Text>{props.message}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={{ flex: 1 }}>Payment Method</Text>
        <Text>{props.paymentMethod}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={{ flex: 1 }}>Order Time</Text>
        <Text>{props.orderTime}</Text>
      </View>
    </View>
  );
};

export { FinalOrder, FinalDetails };

const styles = StyleSheet.create({
  pic: { flex: 1, height: "auto", width: "auto", resizeMode: "contain" },
  finalOrder: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 3,
    height: 70,
  },
  info: {
    flex: 3,
    flexDirection: "column",
    alignSelf: "center",
  },
  viewRow: { flexDirection: "row", marginBottom: 10 },
});
