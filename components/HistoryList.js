import React from "react";
import { Text, View } from "react-native";
import styles from "../assets/design/styles";

const HistoryList = (props) => {
  const { seatNo, total, date } = props;

  return (
    <View style={styles.history}>
      <Text style={styles.historyTableNum}>Table {seatNo}</Text>
      <View style={styles.historyInfo}>
        <Text>RM{total}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default HistoryList;
