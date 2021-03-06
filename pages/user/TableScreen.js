import * as React from "react";
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../assets/design/styles";
import Logo from "../../components/logo";
import AppButton from "../../components/AppButton";
import { useFirebase } from "../../firebase/FirebaseContext";

const TableScreen = ({ navigation }) => {
  const [seatNo, setSeatNo] = React.useState("");
  const { setSeatNoID } = useFirebase();

  return (
    <SafeAreaView style={styles.bgColour}>
      <ScrollView>
        <Logo />

        <Text style={styles.p}>Please enter your seat number:</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => setSeatNo(text)}
          value={seatNo}
        />

        <AppButton
          title="Check Out Our Menu ->"
          onPress={() => {
            if (seatNo !== "") {
              navigation.navigate("tabNav");
              setSeatNoID(seatNo);
            } else {
              alert("Please insert your seat number");
            }
          }}
        />
      </ScrollView>

      {/* direct to staff login page */}
      <TouchableOpacity
        style={{ marginBottom: 12 }}
        onPress={() => navigation.navigate("StaffLoginScreen")}
      >
        <Text style={styles.link}>Staff Login </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default TableScreen;
