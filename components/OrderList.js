import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../assets/design/styles";

const OrderList = ({ picURL, name, price, quantity, onPlus, onMinus }) => {
  return (
    <View style={styles.order}>
      <Image
        style={styles.orderPic}
        source={{
          uri: picURL,
        }}
      />
      <View style={styles.orderInfo}>
        <Text>{name}</Text>
        <Text>RM {price}</Text>
      </View>
      <View style={styles.orderButton}>
        <TouchableOpacity activeOpacity={0.7} onPress={onMinus}>
          <Text style={{ fontSize: 18 }}>- </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}> {quantity} </Text>
        <TouchableOpacity onPress={onPlus}>
          <Text style={{ fontSize: 18 }}> +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderList;
