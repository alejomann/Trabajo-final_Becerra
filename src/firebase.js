import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6VL3ef9cQpU-2Ro4L1uJvmkSNB0jiyco",
  authDomain: "productos-coder.firebaseapp.com",
  projectId: "productos-coder",
  storageBucket: "productos-coder.appspot.com",
  messagingSenderId: "447092608232",
  appId: "1:447092608232:web:66dfe1e7f2b0c74fad4d5d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);