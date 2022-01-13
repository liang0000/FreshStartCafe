import * as React from "react";
import { Text, View, Button, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Logo from "../../components/logo";
import styles from "../../assets/design/styles";
import AppButton from "../../components/addButton";

const staffLoginScreen = ({ navigation }) => {
  const [secretKey, setSecretKey] = React.useState("");

  const ScreteKeyValidation = (value) => {
    if (value === "admin999") {
      navigation.navigate("menu");
    } else {
      alert("invalid secret key");
    }
  };

  return (
    <View style={styles.bgColour}>
      <Logo />

      <Text style={styles.p}>Please insert Secret Key:</Text>
      <TextInput
        style={styles.inputText}
        placeholder="secret key"
        secureTextEntry={true}
        onChangeText={(text) => setSecretKey(text)}
        value={secretKey}
      />

      <TouchableOpacity style={styles.screenContainer}>
        <AppButton title="Login" onPress={ScreteKeyValidation} />
      </TouchableOpacity>

      {/* direct user to prompt seat number */}
      <Button
        title="Table Number Insert >>"
        color="clear"
        onPress={() => navigation.navigate("tableScreen")}
      />
    </View>
  );
};
export default staffLoginScreen;
