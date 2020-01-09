import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDv0qayHgAulG_oGJLWKU11X84iAikyuIM",
  authDomain: "crwn-db-2bbe5.firebaseapp.com",
  databaseURL: "https://crwn-db-2bbe5.firebaseio.com",
  projectId: "crwn-db-2bbe5",
  storageBucket: "crwn-db-2bbe5.appspot.com",
  messagingSenderId: "324634800757",
  appId: "1:324634800757:web:f382bb5a02ec3b61623e3c",
  measurementId: "G-MS45L74Y00"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
