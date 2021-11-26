import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./firebase";

export const app = firebaseConfig.projectId ? initializeApp(firebaseConfig) : {};
export const db = firebaseConfig.projectId ? getFirestore() : {};
export const auth = firebaseConfig.projectId ? getAuth() : {};
