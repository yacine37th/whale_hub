import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_AUTHDOMAIN}`,
  projectId:  `${import.meta.env.VITE_PROJECTID}`,
  storageBucket: `${import.meta.env.VITE_STORAGEBUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_MESSAGINGSENDERID}`,
  appId: `${import.meta.env.APIID}`
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


export const userCollection = query(collection(db, "users"));