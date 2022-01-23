import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../assets/design/styles";

const FoodList = (props) => {
  const { image, name, price } = props;
  return (
    <View style={styles.foodView}>
      <Image
        style={styles.foodImage}
        resizeMode="stretch"
        source={{
          uri: image,
          // uri: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
        }}
      />
      <View>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textPrice}>RM {price}</Text>
      </View>
    </View>
  );
};

export default FoodList;
