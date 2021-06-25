import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3VZIXF8SEmiNzrN4XQst17CS7FX-Ofkc",
  authDomain: "bodega-food-cce4f.firebaseapp.com",
  projectId: "bodega-food-cce4f",
  storageBucket: "bodega-food-cce4f.appspot.com",
  messagingSenderId: "140317036704",
  appId: "1:140317036704:web:3ee1d4f3cf5be8154179c5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
