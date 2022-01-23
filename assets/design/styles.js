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
    alignSelf: "center",
  },

  p: {
    fontSize: 14,
    marginTop: "10%",
    textAlign: "center",
  },

  link: {
    color: "#FFF",
    textAlign: "center",
  },

  undLink: {
    textAlign: "center",
    textDecorationLine: "underline",
  },

  filterView: {
    backgroundColor: "#ddd",
    padding: 12,
    marginTop: 12,
  },

  centerView: {
    marginTop: 12,
    alignItems: "center",
  },

  detailImage: {
    width: "100%",
    height: 200,
  },

  detailNoImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  detailText: {
    marginHorizontal: 12,
    marginTop: 12,
    fontSize: 20,
  },

  detailTextSmall: {
    marginHorizontal: 12,
    marginTop: 12,
  },

  deleteUpdateView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  deleteBtn: {
    width: "40%",
    alignSelf: "stretch",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#ff0000",
  },

  deleteStyle: {
    color: "#fff",
    textAlign: "center",
  },

  updateBtn: {
    width: "40%",
    alignSelf: "stretch",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    backgroundColor: "green",
  },

  updateStyle: {
    color: "#fff",
    textAlign: "center",
  },

  uploadStyle: {
    backgroundColor: "green",
    marginTop: 12,
    marginBottom: 12,
    marginHorizontal: 12,
    padding: 12,
  },

  uploadBtn: { color: "#fff", textAlign: "center" },

  foodView: {
    marginTop: 12,
    marginHorizontal: 12,
    padding: 8,
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowOpacity: 0.8,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    elevation: 5,
  },

  foodImage: { width: 100, height: 55 },

  textName: { marginLeft: 12, marginTop: 12 },

  textPrice: { marginLeft: 18, marginTop: 2, color: "#777" },

  counterGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 12,
  },

  counterStyle: { flexDirection: "row", marginTop: 20 },

  headerBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 12,
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
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

  history: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 3,
    height: 70,
  },

  historyTableNum: {
    alignSelf: "center",
    fontSize: 18,
  },

  historyInfo: {
    flex: 3,
    alignItems: "flex-end",
    flexDirection: "column",
    alignSelf: "center",
  },

  orderPic: { flex: 1, height: "auto", width: "auto", resizeMode: "contain" },

  order: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 3,
    height: 70,
  },

  orderInfo: {
    flex: 3,
    alignItems: "flex-start",
    flexDirection: "column",
    alignSelf: "center",
  },

  orderButton: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "center",
    marginRight: 20,
    fontSize: 18,
  },

  totalAmount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 1,
    height: 50,
    margin: 2,
  },

  totalPrice: {
    fontWeight: "bold",
    color: "red",
    marginRight: 10,
  },

  totalButton: {
    padding: 15,
    borderLeftWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },

  finalOrderPic: {
    flex: 1,
    height: "auto",
    width: "auto",
    resizeMode: "contain",
  },

  finalOrder: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 3,
    height: 70,
  },

  finalOrderInfo: {
    flex: 3,
    flexDirection: "column",
    alignSelf: "center",
  },

  payButton: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
  },

  cardInput: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
});

export default styles;
