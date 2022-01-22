import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const FoodList = (props) => {
  const { image, name, price } = props;
  return (
    <View
      style={{
        marginTop: 12,
        marginHorizontal: 12,
        padding: 8,
        flexDirection: "row",
        backgroundColor: "#fff",
        shadowOpacity: 0.8,
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      <Image
        style={{ width: 100, height: 55 }}
        resizeMode="stretch"
        source={{
          uri: image,
          // uri: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
        }}
      />
      <View>
        <Text style={{ marginLeft: 12, marginTop: 12 }}>{name}</Text>
        <Text style={{ marginLeft: 18, marginTop: 2, color: "#777" }}>
          RM {price}
        </Text>
      </View>
    </View>
  );
};

export default FoodList;
