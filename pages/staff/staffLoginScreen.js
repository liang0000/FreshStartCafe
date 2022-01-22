import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Logo from "../../components/logo";
import styles from "../../assets/design/styles";
import AppButton from "../../components/AppButton";

const StaffLoginScreen = ({ navigation }) => {
  const [secretKey, setSecretKey] = useState("");

  return (
    <SafeAreaView style={styles.bgColour}>
      <ScrollView>
        <Logo />

        <Text style={[styles.p, { textAlign: "center" }]}>
          Please insert Secret Key:
        </Text>
        <TextInput
          style={[styles.inputText, { alignSelf: "center" }]}
          placeholder="secret key"
          secureTextEntry={true}
          onChangeText={setSecretKey}
          value={secretKey}
        />

        <AppButton
          title="Login"
          onPress={() => {
            if (secretKey === "admin999") {
              navigation.navigate("StaffBottomTab");
            } else {
              alert("Invalid key.");
            }
          }}
        />
      </ScrollView>
      {/* direct user to prompt seat number */}
      <TouchableOpacity
        style={{ marginBottom: 12 }}
        onPress={() => navigation.navigate("tableScreen")}
      >
        <Text style={{ color: "#FFF", textAlign: "center" }}>
          Table Number Insert{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default StaffLoginScreen;
