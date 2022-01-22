import { DatePickerAndroid, StyleSheet } from "react-native";
import { BottomSheet } from "react-native-elements/dist/bottomSheet/BottomSheet";
import { color } from "react-native-elements/dist/helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 200,
    marginTop: "30%",
    alignSelf: "center",
  },

  bgColour: {
    flex: 1,
    backgroundColor: "#D3D3CB",
  },

  inputText: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
  },

  p: {
    fontSize: 14,
    marginTop: "10%",
  },

  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    width: "90%",
    marginTop: 8,
  },

  appButtonContainer: {
    backgroundColor: "#9c9c94",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 12,
    marginTop: 12,
  },

  appButtonText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default styles;
