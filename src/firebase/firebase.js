import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADydo7EcSIk_nyLbSGcn5UXeQD9ND9qaQ",
  authDomain: "whale-hub.firebaseapp.com",
  projectId: "whale-hub",
  storageBucket: "whale-hub.appspot.com",
  messagingSenderId: "124280521072",
  appId: "1:124280521072:web:d09c562d24c0080be04fb5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
