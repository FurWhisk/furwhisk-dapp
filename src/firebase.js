import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLdTpQb8JHwJPdXFFx80J6UYxJzjT-X9U",
  authDomain: "furwhisk-xp.firebaseapp.com",
  projectId: "furwhisk-xp",
  storageBucket: "furwhisk-xp.firebasestorage.app",
  messagingSenderId: "605446637885",
  appId: "1:605446637885:web:eb2691d2c20bf5f9be9d54",
  measurementId: "G-9TJFQ8E68C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
