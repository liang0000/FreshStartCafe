import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderButtonNavigation = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginTop: 12,
        marginHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
      }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButtonNavigation;
