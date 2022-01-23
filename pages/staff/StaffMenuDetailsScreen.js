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
import styles from "../../assets/design/styles";

const StaffMenuDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { deleteProduct } = useFirebase();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Image
          style={styles.detailImage}
          resizeMode="cover"
          source={{
            uri: product.productImage,
          }}
        />
        <Text style={styles.detailText}>{product.productName}</Text>
        <Text style={styles.detailTextSmall}>{product.productDescription}</Text>
        <Text style={styles.detailText}>RM {product.productPrice}</Text>
      </ScrollView>
      <View style={styles.deleteUpdateView}>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteProduct(product.id)}
        >
          <Text style={styles.deleteStyle}>DELETE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.updateBtn}
          onPress={() =>
            navigation.navigate("StaffUpdateMenuScreen", {
              product: product,
            })
          }
        >
          <Text style={styles.updateStyle}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StaffMenuDetailsScreen;
