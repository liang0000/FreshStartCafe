import React, { useContext, useState, useEffect, createContext } from "react";
import { onAuthStateChanged } from "@firebase/auth";
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
  //   const updateProduct = async (
  //     productId,
  //     productImage,
  //     productName,
  //     productPrice,
  //     productStock,
  //     productDescription,
  //     productCategory,
  //     ingredients,
  //     instructions
  //   ) => {
  //     await updateDoc(doc(db, "products", productId), {
  //       productImage: productImage,
  //       productName: productName,
  //       productPrice: productPrice,
  //       productStock: productStock,
  //       productDescription: productDescription,
  //       productCategory: productCategory,
  //       ingredients: ingredients,
  //       instructions: instructions,
  //     })
  //       .then(() => {
  //         console.log("Successfully update product: ", productName);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  //delete product
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

  //allows those function to be called later in other pages
  const value = {
    menu,
    uploadMenu,
    getMenu,
    deleteProduct,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
