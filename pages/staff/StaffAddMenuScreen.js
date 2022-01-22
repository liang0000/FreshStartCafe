import React, { useState } from "react";
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

const StaffAddMenuScreen = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  // Firebase function
  const { uploadMenu } = useFirebase();

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          {image !== null ? (
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                height: 200,
                backgroundColor: "lightgrey",
              }}
              resizeMode="cover"
            />
          ) : (
            <View
              style={{
                width: "100%",
                height: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>No Image Selected</Text>
            </View>
          )}
          <TouchableOpacity style={{ marginHorizontal: 12, marginTop: 12 }}>
            <Text
              style={{ textAlign: "center", textDecorationLine: "underline" }}
              onPress={pickImage}
            >
              Choose Image
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 12, alignItems: "center" }}>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            onChangeText={(text) => setProductName(text)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Category"
            onChangeText={(text) => setProductCategory(text)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Price"
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
            onChangeText={(text) => setProductDescription(text)}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          marginTop: 12,
          marginBottom: 12,
          marginHorizontal: 12,
          padding: 12,
        }}
      >
        <Text
          style={{ color: "#fff", textAlign: "center" }}
          onPress={() =>
            uploadMenu(
              image,
              productName,
              productCategory,
              productPrice,
              productDescription
            )
          }
        >
          Upload Menu
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StaffAddMenuScreen;
