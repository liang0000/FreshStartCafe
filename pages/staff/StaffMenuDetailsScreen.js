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

const StaffMenuDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { deleteProduct } = useFirebase();

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            width: "40%",
            alignSelf: "stretch",
            marginHorizontal: 12,
            marginBottom: 12,
            padding: 12,
            backgroundColor: "#ff0000",
          }}
          onPress={() => deleteProduct(product.id)}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>DELETE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "40%",
            alignSelf: "stretch",
            marginHorizontal: 12,
            marginBottom: 12,
            padding: 12,
            backgroundColor: "green",
          }}
          onPress={() =>
            navigation.navigate("StaffUpdateMenuScreen", {
              product: product,
            })
          }
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StaffMenuDetailsScreen;
