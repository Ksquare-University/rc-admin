import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase/firebaseConfig";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
