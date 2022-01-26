import firebase from "firebase/compat/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/storage";
//import "firebase/compat/auth";
//import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk-jEhzik9R33sOYmM7EAsDMcQCOmVzgk",
  authDomain: "freshstartcafe-5f4ee.firebaseapp.com",
  databaseURL: "https://freshstartcafe-5f4ee-default-rtdb.firebaseio.com",
  projectId: "freshstartcafe-5f4ee",
  storageBucket: "freshstartcafe-5f4ee.appspot.com",
  messagingSenderId: "552797045733",
  appId: "1:552797045733:web:6798a6e174d4799c4ea50c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = getFirestore();
const storage = firebase.storage();

export { db, storage };
export default firebaseConfig;
