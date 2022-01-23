import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../../assets/design/styles";

const UserMenuDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

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
    </SafeAreaView>
  );
};

export default UserMenuDetailsScreen;
