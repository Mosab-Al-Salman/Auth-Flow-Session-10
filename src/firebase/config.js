import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDitd1ikjIumWCrhg5YxjhBPosKitX3Das",
  authDomain: "mosab-7e14a.firebaseapp.com",
  projectId: "mosab-7e14a",
  storageBucket: "mosab-7e14a.firebasestorage.app",
  messagingSenderId: "911345109724",
  appId: "1:911345109724:web:59e224b40e1a84d0e04219"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);