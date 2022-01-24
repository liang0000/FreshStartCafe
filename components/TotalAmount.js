import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../assets/design/styles";

const TotalAmount = (props) => {
  const { totalPrice, onPress, text } = props;

  return (
    <View style={styles.totalAmount}>
      <Text style={styles.totalPrice}>Total: RM{totalPrice}</Text>
      <TouchableOpacity style={styles.totalButton} onPress={onPress}>
        <Text style={{ color: "red", fontWeight: "bold" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalAmount;
