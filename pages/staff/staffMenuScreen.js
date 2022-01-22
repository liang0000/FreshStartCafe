import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import HeaderButtonNavigation from "../../components/HeaderButtonNavigation";
import FoodList from "../../components/FoodList";
import { useFirebase } from "../../firebase/FirebaseContext";

const StaffMenuScreen = ({ navigation }) => {
  const { menu, getMenu } = useFirebase();

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView horizontal>
        <HeaderButtonNavigation title="Salad" />
      </ScrollView>
      <ScrollView>
        <View style={{ backgroundColor: "#ddd", padding: 12, marginTop: 12 }}>
          <Text>Asian</Text>
        </View>

        {menu.length !== 0
          ? menu.map((product, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate("StaffMenuDetailsScreen", {
                      product: product,
                    })
                  }
                >
                  <FoodList
                    image={product.productImage}
                    name={product.productName}
                    price={product.productPrice}
                  />
                </TouchableOpacity>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};
export default StaffMenuScreen;
