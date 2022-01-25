import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../assets/design/styles";

const FinalOrderList = (props) => {
  const { picURL, name, price, quantity } = props;

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
      <Text style={{ alignSelf: "flex-end" }}>x{quantity}</Text>
    </View>
  );
};

export default FinalOrderList;
