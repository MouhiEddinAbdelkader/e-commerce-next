// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe9ipAJkwYGA-0HA9QjyrQUPYWG6k6boI",
  authDomain: "e-shop-d23e2.firebaseapp.com",
  projectId: "e-shop-d23e2",
  storageBucket: "e-shop-d23e2.appspot.com",
  messagingSenderId: "291587949944",
  appId: "1:291587949944:web:f590f6bd72397f4eba348d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;