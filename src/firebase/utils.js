import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./firebase";

initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
