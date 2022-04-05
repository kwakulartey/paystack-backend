// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIwS4SarfTLwxbj-NkmBz_7Ky6Tl3_TcA",
  authDomain: "let-s-accommodate.firebaseapp.com",
  projectId: "let-s-accommodate",
  storageBucket: "let-s-accommodate.appspot.com",
  messagingSenderId: "642825766952",
  appId: "1:642825766952:web:33475d3fdbb3c48f6c8d1d",
  measurementId: "G-ZDC16NRJ4K"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(firebaseApp);