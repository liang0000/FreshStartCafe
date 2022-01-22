import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  CardField,
  useConfirmPayment,
  StripeProvider,
} from "@stripe/stripe-react-native";

//ADD localhost address of your server
const API_URL = "http://localhost:3000";

const CardPayment = (props) => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment Successful ", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_51K5Xv8FTDfvNWTlBDZOFUUpz7yp8KldtNXsUc1oVV8TJxQv0aEYeiPfz1o09GXBGkXluJUU2nrzk6HaMvcF0Q7X400e2aoMFXu">
      <View style={{ padding: 20, flex: 1, backgroundColor: "#d3d3cb" }}>
        <View style={{ justifyContent: "center", flexGrow: 1 }}>
          <Image
            style={{ width: 350, height: 100, resizeMode: "center" }}
            source={require("./assets/visamastercardamex.png")}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="E-Mail"
            keyboardType="email-address"
            onChange={(value) => setEmail(value.nativeEvent.text)}
            style={styles.input}
          />
          <CardField
            postalCodeEnabled="false"
            placeholder={{
              number: "4242 4242 4242 4242",
            }}
            cardStyle={styles.card}
            style={styles.cardContainer}
            onCardChange={(cardDetails) => setCardDetails(cardDetails)}
          />
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            padding: 15,
            backgroundColor: "white",
            borderRadius: 5,
          }}
          onPress={handlePayPress}
          disabled={loading}
        >
          <Text style={{ fontSize: 16 }}>Pay RM 36.00</Text>
        </TouchableOpacity>
      </View>
    </StripeProvider>
  );
};
export default CardPayment;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});
