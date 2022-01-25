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
  //constances
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");

  // Firebase function
  const { uploadMenu } = useFirebase();

  //access to user libray
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
      <TouchableOpacity style={styles.uploadStyle}>
        <Text
          style={styles.uploadBtn}
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
