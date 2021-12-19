import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZqBr1oydwNeJsP9yHsCg47Nv2JJo346k",
  authDomain: "challenge-feb4c.firebaseapp.com",
  projectId: "challenge-feb4c",
  storageBucket: "challenge-feb4c.appspot.com",
  messagingSenderId: "509882963838",
  appId: "1:509882963838:web:92487bcd8056cec35a852f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
