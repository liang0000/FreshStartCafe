import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../assets/design/styles";
import Logo from "../../components/logo";
import AppButton from "../../components/AppButton";

const tableScreen = ({ navigation }) => {
  const [seatNo, setSeatNo] = React.useState("");

  return (
    <SafeAreaView style={styles.bgColour}>
      <ScrollView>
        <Logo />

        <Text style={[styles.p, { textAlign: "center" }]}>
          Please enter your seat number:
        </Text>
        <TextInput
          style={[styles.inputText, { alignSelf: "center" }]}
          onChangeText={(text) => setSeatNo(text)}
          value={seatNo}
        />

        <AppButton
          title="Check Out Our Menu ->"
          onPress={() =>
            navigation.push("tabNav", {
              seatNoID: seatNo,
            })
          }
        />
      </ScrollView>

      {/* direct to staff login page */}
      <TouchableOpacity
        style={{ marginBottom: 12 }}
        onPress={() => navigation.navigate("StaffLoginScreen")}
      >
        <Text style={{ color: "#FFF", textAlign: "center" }}>Staff Login </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default tableScreen;
