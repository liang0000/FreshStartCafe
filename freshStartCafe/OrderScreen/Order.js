import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Order = (props) => {
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

export default Order;

const styles = StyleSheet.create({
  pic: { flex: 1, height: "auto", width: "auto", resizeMode: "contain" },
  order: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 3,
    height: 70,
  },
  info: {
    flex: 3,
    alignItems: "flex-start",
    flexDirection: "column",
    alignSelf: "center",
  },
  button: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "center",
    marginRight: 20,
    fontSize: 18,
  },
});
