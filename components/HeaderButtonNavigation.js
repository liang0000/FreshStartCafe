import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/design/styles";

const HeaderButtonNavigation = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.headerBtn} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButtonNavigation;
