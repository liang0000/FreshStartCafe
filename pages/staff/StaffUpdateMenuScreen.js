import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "../../assets/design/styles";
import * as ImagePicker from "expo-image-picker";
import { useFirebase } from "../../firebase/FirebaseContext";
import { sqrt } from "react-native-reanimated";

const StaffUpdateMenuScreen = ({ route }) => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");

  // passing ID
  const { product } = route.params;

  // Firebase function
  const { updateProduct } = useFirebase();

  // allowed user to select image from local mobile storage
  const pickImage = async () => {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
      .then((result) => {
        if (!result.cancelled) setImage(result.uri);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // render when pageload
  useEffect(() => {
    if (product.productImage) setImage(product.productImage);
    if (product.productName !== "") {
      setProductName(product.productName);
    }
    if (product.productCategory !== "") {
      setProductCategory(product.productCategory);
    }
    if (product.productPrice !== 0) {
      setProductPrice(product.productPrice);
    }
    if (product.productDescription !== "") {
      setProductDescription(product.productDescription);
    }
  }, [product]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          {image !== null ? (
            <Image
              source={{ uri: image }}
              style={styles.detailImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.detailNoImage}>
              <Text>No Image Selected</Text>
            </View>
          )}
          <TouchableOpacity style={styles.detailTextSmall}>
            <Text style={styles.undLink} onPress={pickImage}>
              Choose Image
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            value={productName}
            onChangeText={(text) => setProductName(text)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Category"
            value={productCategory}
            onChangeText={(text) => setProductCategory(text)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Price"
            value={productPrice.toString()}
            onChangeText={(text) => setProductPrice(text)}
          />
          <TextInput
            style={[
              styles.inputText,
              { height: 100, textAlignVertical: "top" },
            ]}
            placeholder="Description"
            multiline
            numberOfLines={10}
            value={productDescription}
            onChangeText={(text) => setProductDescription(text)}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.uploadStyle}>
        <Text
          style={styles.uploadBtn}
          onPress={() =>
            updateProduct(
              product.id,
              image,
              productName,
              productCategory,
              productPrice,
              productDescription
            )
          }
        >
          Update Menu
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StaffUpdateMenuScreen;
