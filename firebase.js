// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8wrVnogfvhaAK_VbEiknTR2raE5l969g",
  authDomain: "itts-mart-9be36.firebaseapp.com",
  projectId: "itts-mart-9be36",
  storageBucket: "itts-mart-9be36.appspot.com",
  messagingSenderId: "760259330831",
  appId: "1:760259330831:web:94a29a6624d4a4506eb47a",
  measurementId: "G-TZ95WBNGLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);

export default firebase;
