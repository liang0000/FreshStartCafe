import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "../../assets/design/styles";
import { useFirebase } from "../../firebase/FirebaseContext";

const UserMenuDetailsScreen = ({ route }) => {
  const [counter, setCounter] = useState(1);
  const { product } = route.params;
  const { addCart } = useFirebase();

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

        {/* counter for add order */}
        <View style={styles.counterGroup}>
          <Text style={styles.detailText}>RM {product.productPrice}</Text>
          <View style={styles.counterStyle}>
            <TouchableOpacity
              onPress={() => {
                if (counter >= 1) {
                  setCounter(counter - 1);
                }
              }}
            >
              <Icon name="minus-circle" type="font-awesome-5" size={18} />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 12 }}>{counter}</Text>
            <TouchableOpacity onPress={() => setCounter(counter + 1)}>
              <Icon name="plus-circle" type="font-awesome-5" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* add order button */}
      <TouchableOpacity style={styles.uploadStyle}>
        <Text
          style={styles.uploadBtn}
          onPress={() => addCart(product, counter)}
        >
          add to cart
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default UserMenuDetailsScreen;
