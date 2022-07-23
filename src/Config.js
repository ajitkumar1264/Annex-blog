
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "paste your key",
  authDomain: "paste your key",
  projectId: "paste your key",
  storageBucket: "paste your key",
  messagingSenderId: "paste your key",
  appId: "paste your key",
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
