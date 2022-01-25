import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import {
  CardField,
  useConfirmPayment,
  StripeProvider,
} from "@stripe/stripe-react-native";
import styles from "../../assets/design/styles";
import { useFirebase } from "../../firebase/FirebaseContext";

const pk =
  "pk_test_51K5Xv8FTDfvNWTlBDZOFUUpz7yp8KldtNXsUc1oVV8TJxQv0aEYeiPfz1o09GXBGkXluJUU2nrzk6HaMvcF0Q7X400e2aoMFXu";

const CardPaymentScreen = ({ route, navigation }) => {
  const { cart, seatNo, payment, message, total } = route.params;
  const { payOrder } = useFirebase();
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  return (
    <StripeProvider publishableKey={pk}>
      <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
        <View style={{ justifyContent: "center", flexGrow: 1, margin: 20 }}>
          <Image
            style={{ width: 350, height: 100, resizeMode: "center" }}
            source={require("../../assets/visamastercardamex.png")}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="E-Mail"
            keyboardType="email-address"
            onChange={(value) => setEmail(value.nativeEvent.text)}
            style={styles.cardInput}
          />
          <CardField
            postalCodeEnabled="false"
            placeholder={{
              number: "4242 4242 4242 4242",
            }}
            cardStyle={{ backgroundColor: "#efefefef" }}
            style={{ height: 50, marginVertical: 30 }}
            onCardChange={(cardDetails) => setCardDetails(cardDetails)}
          />
        </View>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => {
            payOrder(
              cardDetails,
              email,
              confirmPayment,
              cart,
              seatNo,
              payment,
              message,
              total,
              navigation
            );
          }}
          disabled={loading}
        >
          <Text style={{ fontSize: 16 }}>Pay RM{total}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </StripeProvider>
  );
};

export default CardPaymentScreen;
