import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import History from "./History";

const HistorySample = [
  {
    rank: 1,
    table: 5,
    price: 21,
    date: "23-11-2021 16:04",
  },
  {
    rank: 2,
    table: 6,
    price: 34,
    date: "21-11-2021 21:24",
  },
];

const HistoryList = () => {
  const renderItem = ({ item }) => {
    return <History table={item.table} price={item.price} date={item.date} />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <FlatList
        data={HistorySample}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.date + index}
      />
    </SafeAreaView>
  );
};

export default HistoryList;
