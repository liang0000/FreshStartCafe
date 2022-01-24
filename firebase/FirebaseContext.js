import React, { useContext, useState, useEffect, createContext } from "react";
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
  const [menu, setMenu] = useState([]);
  const [seatNoID, setSeatNoID] = useState(null);
  const [cart, setCart] = useState([]);

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
      productPrice !== "" &&
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
  const addCart = async (
    productImage,
    productName,
    productPrice,
    productQuan,
    productID,
    seatNo
  ) => {
    if (productQuan !== 0) {
      await addDoc(collection(db, "carts"), {
        productImage,
        productName,
        productPrice,
        productQuan,
        productID,
        seatNo,
      })
        .then((docRef) => {
          const product = {
            id: docRef.id,
            productImage: productImage,
            productName: productName,
            productPrice: productPrice,
            productQuan: productQuan,
            seatNo: seatNo,
          };
          setCart((prevState) => [...prevState, product]);
          console.log("Successfully added to cart");
          alert({ productName } + " added to cart");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Quantity of food or drink cannot be 0");
    }
  };

  //Read Carts
  const getCart = async () => {
    let carts = [];
    const querySnapshot = await getDocs(collection(db, "carts"));
    querySnapshot.forEach((cart) => {
      const cartData = cart.data();
      cartData.id = cart.id;
      carts.push(cartData);
    });
    setCart(carts);
  };

  //allows those function to be called later in other pages
  const value = {
    menu,
    seatNoID,
    setSeatNoID,
    uploadMenu,
    getMenu,
    deleteProduct,
    updateProduct,
    cart,
    addCart,
    getCart,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
