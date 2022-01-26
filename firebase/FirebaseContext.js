import React, { useContext, useState, useEffect, createContext } from "react";
import { Alert } from "react-native";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import uuid from "react-native-uuid";
import { db, storage } from "../config";

const FirebaseContext = createContext({});

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  //ADD localhost address of your server
  const API_URL = "http://localhost:3000";

  const [menu, setMenu] = useState([]);
  const [seatNoID, setSeatNoID] = useState(null);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  // Upload menu's image to Storage and Firestore
  const uploadMenu = async (
    image,
    productName,
    productCategory,
    productPrice,
    productDescription
  ) => {
    if (
      image !== "" &&
      productName !== "" &&
      productCategory !== "" &&
      productPrice !== 0 &&
      productDescription
    ) {
      // const storageDb = getStorage();
      let randomId = uuid.v4();
      let fileExtension = image.split(".").pop();
      let fileName = `${randomId}.${fileExtension}`;
      let response = await fetch(image);
      let blob = await response.blob();
      const productImageRef = ref(storage, `images/${fileName}`);
      await uploadBytes(productImageRef, blob);
      await getDownloadURL(ref(storage, productImageRef)).then(async (url) => {
        await addDoc(collection(db, "products"), {
          productImage: url,
          productName: productName,
          productCategory: productCategory,
          productPrice: productPrice,
          productDescription: productDescription,
        })
          .then((docRef) => {
            const product = {
              id: docRef.id,
              productImage: url,
              productName: productName,
              productPrice: productPrice,
              productDescription: productDescription,
            };
            setMenu((prevState) => [...prevState, product]);
            console.log("Menu uploaded Successfully");
            alert("Menu Uploaded Successfully");
          })
          .catch((error) => {
            console.error(error);
          });
      });
    } else {
      alert("Unsuccessfully, no empty input is allowed");
    }
  };

  //Read products
  const getMenu = async () => {
    let products = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((product) => {
      const productData = product.data();
      productData.id = product.id;
      products.push(productData);
    });
    setMenu(products);
  };

  //Update product
  const updateProduct = async (
    productId,
    productImage,
    productName,
    productCategory,
    productPrice,
    productDescription
  ) => {
    let dummyImage = productImage;
    await menu.forEach(async (product) => {
      if (product.id === productId) {
        if (product.productImage !== dummyImage) {
          let randomId = uuid.v4();
          let fileExtension = dummyImage.split(".").pop();
          let fileName = `${randomId}.${fileExtension}`;
          let response = await fetch(dummyImage);
          let blob = await response.blob();
          const productImageRef = ref(storage, `images/${fileName}`);
          await uploadBytes(productImageRef, blob);
          await getDownloadURL(ref(storage, productImageRef)).then(
            async (url) => {
              await updateDoc(doc(db, "products", productId), {
                productImage: url,
              }).then(() => {
                product.productImage = url;
                setMenu((prevState) => [...prevState, menu]);
              });
            }
          );
        }
      }
    });
    await updateDoc(doc(db, "products", productId), {
      productName: productName,
      productCategory: productCategory,
      productPrice: productPrice,
      productDescription: productDescription,
    })
      .then(() => {
        const updatedMenu = menu;
        updatedMenu.forEach((product) => {
          if (product.id === productId) {
            product.productName = productName;
            product.productCategory = productCategory;
            product.productPrice = productPrice;
            product.productDescription = productDescription;
          }
        });
        setMenu(updatedMenu);
        alert("Menu Updated Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Delete product
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id))
      .then(() => {
        const newMenu = menu.filter((product) => {
          return id !== product.id;
        });
        setMenu(newMenu);
        console.log("Menu Deleted Successfully!");
        alert("Menu Deleted Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //----------------------Cart-----------------------------
  //Add to Cart
  // const addCart = async (
  //   productImage,
  //   productName,
  //   productPrice,
  //   productQuan,
  //   productID,
  //   seatNo
  // ) => {
  //   if (productQuan > 0) {
  //     await addDoc(collection(db, "carts"), {
  //       productImage,
  //       productName,
  //       productPrice,
  //       productQuan,
  //       productID,
  //       seatNo,
  //     })
  //       .then((docRef) => {
  //         const cart = {
  //           id: docRef.id,
  //           productImage: productImage,
  //           productName: productName,
  //           productPrice: productPrice,
  //           productQuan: productQuan,
  //           seatNo: seatNo,
  //         };
  //         setCart((prevState) => [...prevState, cart]);
  //         console.log("Successfully added to cart");
  //         alert({ productName } + " added to cart");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } else {
  //     alert("Please add at least 1 food or drink");
  //   }
  // };

  //Add to Cart
  const addCart = (product, productQuan) => {
    product.productQuan = productQuan;
    if (productQuan > 0) {
      alert(product.productName + " added to cart.");
      setCart((prevState) => [...prevState, product]);
    } else {
      alert("Please add at least 1 food or drink");
    }
  };

  //Plus quanlity of product in cart
  const plusCart = (prod) => {
    let dummyCart = cart;
    dummyCart.forEach((product) => {
      if (product.id === prod.id) {
        product.productQuan = product.productQuan + 1;
      }
    });
    setCart(dummyCart);
  };

  //Minus quanlity of product in cart
  const minusCart = (prod) => {
    let dummyCart = cart;

    //Remove the product in cart if quantity is 0
    if (prod.productQuan === 1) {
      dummyCart = dummyCart.filter((product) => {
        return product.id !== prod.id;
      });
      setCart(dummyCart);
      return;
    }

    dummyCart.forEach((product) => {
      if (product.id === prod.id) {
        product.productQuan = product.productQuan - 1;
      }
    });
    setCart(dummyCart);
  };

  //----------------------Order-----------------------------
  //Add Order
  const addOrder = async (cart, seatNo, payment, message, total) => {
    // const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    await addDoc(collection(db, "orders"), {
      cart,
      seatNo,
      payment,
      message,
      total,
      // orderTime: timestamp,
    })
      .then((docRef) => {
        const order = {
          id: docRef.id,
          cart: cart,
          seatNo: seatNo,
          payment: payment,
          message: message,
          total: total,
          // orderTime: timestamp,
        };
        setOrder((prevState) => [...prevState, order]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //----------------------Server-----------------------------
  //Connect Network
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

  //Pay with Card and Add Order
  const payOrder = async (
    cardDetails,
    email,
    confirmPayment,
    cart,
    seatNo,
    payment,
    message,
    total,
    navigation
  ) => {
    if (!cardDetails?.complete || !email) {
      alert("Please enter Complete card details and Email");
      return;
    }
    //Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: {
            email: email,
          },
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          addOrder(cart, seatNo, payment, message, total);
          Alert.alert("Alert", "Payment Successful", [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("PaymentSuccessScreen", {
                  cart: cart,
                  seatNo: seatNo,
                  payment: payment,
                  message: message,
                  total: total,
                });
              },
            },
          ]);
          // console.log("Payment Successful ", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  //Read Carts
  // const getCart = async () => {
  //   let carts = [];
  //   const querySnapshot = await getDocs(collection(db, "carts"));
  //   querySnapshot.forEach((cart) => {
  //     const cartData = cart.data();
  //     cartData.id = cart.id;
  //     carts.push(cartData);
  //   });
  //   setCart(carts);
  // };

  //allows those function to be called later in other pages
  const value = {
    menu,
    seatNoID,
    cart,
    order,
    setSeatNoID,
    uploadMenu,
    getMenu,
    deleteProduct,
    updateProduct,
    addCart,
    plusCart,
    minusCart,
    addOrder,
    setCart,
    payOrder,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
