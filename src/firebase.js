import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLdTpQb8JHwJPdXFFx80J6UYxJzjT-X9U",
  authDomain: "furwhisk-xp.firebaseapp.com",
  projectId: "furwhisk-xp",
  storageBucket: "furwhisk-xp.appspot.com",
  messagingSenderId: "605446637885",
  appId: "1:605446637885:web:eb2691d2c20bf5f9be9d54",
  measurementId: "G-9TJFQ8E68C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
