import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFirebase } from "../../firebase/FirebaseContext";

const UserMenuDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Image
          style={{ width: "100%", height: 200 }}
          resizeMode="cover"
          source={{
            uri: product.productImage,
          }}
        />
        <Text style={{ marginHorizontal: 12, marginTop: 12, fontSize: 20 }}>
          {product.productName}
        </Text>
        <Text style={{ marginHorizontal: 12, marginTop: 12 }}>
          {product.productDescription}
        </Text>
        <Text style={{ marginHorizontal: 12, marginTop: 12, fontSize: 20 }}>
          RM {product.productPrice}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserMenuDetailsScreen;
