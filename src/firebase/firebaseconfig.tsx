import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_APIKEY,
  authDomain: "marketing-deals-f95e5.firebaseapp.com",
  projectId: "marketing-deals-f95e5",
  storageBucket: "marketing-deals-f95e5.appspot.com",
  messagingSenderId: "1012405776764",
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);