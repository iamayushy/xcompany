import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB598zhXR0gE6A__iCsbzQcO8wnWxW5iwQ",
  authDomain: "xnation-53c42.firebaseapp.com",
  projectId: "xnation-53c42",
  storageBucket: "xnation-53c42.appspot.com",
  messagingSenderId: "996519540050",
  appId: "1:996519540050:web:18c24c9f70c6135bdb368b"
};

const app = initializeApp(firebaseConfig);
const userAuth = getAuth(app)
const db = getFirestore(app)

export {userAuth, db}
