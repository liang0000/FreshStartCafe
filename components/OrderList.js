import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../assets/design/styles";

const OrderList = (props) => {
  return (
    <View style={styles.order}>
      <Image style={styles.pic} source={props.picURL}></Image>
      <View style={styles.info}>
        <Text>{props.name}</Text>
        <Text>RM {props.price}</Text>
      </View>
      <Button></Button>
    </View>
  );
};

const Button = () => {
  const [quantity, setQuantity] = useState(1);
  const minus = () => {
    if (quantity > 0) {
      setQuantity((prevQuan) => prevQuan - 1);
    }
  };
  const plus = () => {
    setQuantity((prevQuan) => prevQuan + 1);
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity activeOpacity={0.7} onPress={minus}>
        <Text style={{ fontSize: 18 }}>- </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18 }}> {quantity} </Text>
      <TouchableOpacity onPress={plus}>
        <Text style={{ fontSize: 18 }}> +</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderList;
