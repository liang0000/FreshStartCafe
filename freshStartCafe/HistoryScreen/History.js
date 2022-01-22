import React from "react";
import { StyleSheet, Text, View } from "react-native";

const History = (props) => {
  return (
    <View style={styles.history}>
      <Text style={styles.tableNum}>Table {props.table}</Text>
      <View style={styles.info}>
        <Text>RM {props.price}</Text>
        <Text>{props.date}</Text>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  history: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 3,
    height: 70,
  },
  tableNum: {
    alignSelf: "center",
    fontSize: 18,
  },
  info: {
    flex: 3,
    alignItems: "flex-end",
    flexDirection: "column",
    alignSelf: "center",
  },
});
