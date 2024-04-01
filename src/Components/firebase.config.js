
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtCpROIPLBrb06tu_UB8VfbgZu05jseU",
  authDomain: "email-pass-authenticatio-7e8f5.firebaseapp.com",
  projectId: "email-pass-authenticatio-7e8f5",
  storageBucket: "email-pass-authenticatio-7e8f5.appspot.com",
  messagingSenderId: "519596952355",
  appId: "1:519596952355:web:d4581ec1027f2202cf1a96"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

export default auth