import React from "react";
import { Text, View } from "react-native";
import styles from "../assets/design/styles";

const HistoryList = (props) => {
  return (
    <View style={styles.history}>
      <Text style={styles.historyTableNum}>Table {props.table}</Text>
      <View style={styles.historyInfo}>
        <Text>RM {props.price}</Text>
        <Text>{props.date}</Text>
      </View>
    </View>
  );
};

export default HistoryList;
