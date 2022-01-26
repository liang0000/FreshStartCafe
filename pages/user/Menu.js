import React, { useEffect, useState } from "react";
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
import styles from "../../assets/design/styles";

const Menu = ({ navigation }) => {
  //list of categories
  const categories = [
    "All Menu",
    "Asian",
    "Salad",
    "Small Bites",
    "Drink",
    "Western",
  ];
  const { menu, getMenu } = useFirebase();
  const [filter, setFilter] = useState("All Menu");

  //render once page load
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <SafeAreaView style={{ paddingBottom: 50 }}>
      <ScrollView horizontal>
        {categories.map((category, i) => (
          <HeaderButtonNavigation
            key={i}
            title={category}
            onPress={() => setFilter(category)}
          />
        ))}
      </ScrollView>
      <ScrollView>
        <View style={styles.filterView}>
          <Text>{filter}</Text>
        </View>

        {menu.length !== 0
          ? menu.map((product, i) => {
              if (filter === "All Menu") {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      navigation.navigate("UserMenuDetailsScreen", {
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
              } else {
                if (product.productCategory === filter) {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() =>
                        navigation.navigate("UserMenuDetailsScreen", {
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
                }
              }
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
