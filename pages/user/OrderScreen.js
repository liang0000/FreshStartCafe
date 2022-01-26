import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text } from "react-native";
import OrderList from "../../components/OrderList";
import TotalAmount from "../../components/TotalAmount";
import { useFirebase } from "../../firebase/FirebaseContext";

const OrderScreen = ({ navigation }) => {
  const { cart, plusCart, minusCart } = useFirebase();
  const [isRender, setIsRender] = useState(false);
  let total = 0;

  useEffect(() => {
    console.log("Cart update, rerendering");
  }, [cart]);

  return (
    <SafeAreaView style={{ backgroundColor: "#d3d3cb", flex: 1 }}>
      <ScrollView>
        {cart.length !== 0
          ? cart.map((cart, i) => {
              total = total + cart.productPrice * cart.productQuan;
              return (
                <OrderList
                  key={i}
                  picURL={cart.productImage}
                  name={cart.productName}
                  price={cart.productPrice}
                  quantity={cart.productQuan}
                  onMinus={() => {
                    minusCart(cart);
                    setIsRender(isRender ? false : true);
                  }}
                  onPlus={() => {
                    plusCart(cart);
                    setIsRender(isRender ? false : true);
                  }}
                />
              );
            })
          : null}
      </ScrollView>

      <TotalAmount
        totalPrice={total}
        text="Check Out"
        onPress={() => {
          if (cart.length !== 0) {
            navigation.navigate("CheckOutScreen", {
              cart: cart,
              total: total,
            });
          }
        }}
      />
    </SafeAreaView>
  );
};

export default OrderScreen;
