import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import HistoryList from "../../components/HistoryList";
import { useFirebase } from "../../firebase/FirebaseContext";

const HistoryScreen = ({ navigation }) => {
  const { order, getOrder } = useFirebase();

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <ScrollView>
        {order.length !== 0
          ? order.map((order, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate("HistoryDetailsScreen", {
                      order: order,
                    })
                  }
                >
                  <HistoryList
                    seatNo={order.seatNo}
                    total={order.total}
                    date={order.orderTime}
                  />
                </TouchableOpacity>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;
