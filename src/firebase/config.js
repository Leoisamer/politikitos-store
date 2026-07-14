import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJ15VSQek9Ka1MkCN_rEW_zy4nE8MrKK4",
  authDomain: "politikitos-store.firebaseapp.com",
  projectId: "politikitos-store",
  storageBucket: "politikitos-store.firebasestorage.app",
  messagingSenderId: "153717895832",
  appId: "1:153717895832:web:dc748177d5ac860da216ed"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);