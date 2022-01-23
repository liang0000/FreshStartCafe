import React from "react";
import { Text, View } from "react-native";

const FinalDetails = (props) => {
  const { label, text } = props;

  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <Text style={{ flex: 1 }}>{label}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default FinalDetails;
