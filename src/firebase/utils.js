import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./firebase";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
