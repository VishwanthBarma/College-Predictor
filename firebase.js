// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS1M8wmNtT7Tn6TC5GJWldFbtFFvWMKYE",
  authDomain: "college-prediction-e817c.firebaseapp.com",
  projectId: "college-prediction-e817c",
  storageBucket: "college-prediction-e817c.appspot.com",
  messagingSenderId: "73004066605",
  appId: "1:73004066605:web:8e189f938443103a2a55a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
