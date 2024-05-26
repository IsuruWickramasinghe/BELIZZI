
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMGfYIyf_HkocLhOwxPKeQpWPZ3IrC0z0",
  authDomain: "belizzi.firebaseapp.com",
  projectId: "belizzi",
  storageBucket: "belizzi.appspot.com",
  messagingSenderId: "477192628155",
  appId: "1:477192628155:web:601f419bd3789d20fb069e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)

