import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjp3v4QvKEvpp4F9PMFs9VC-kPiq6a2bQ",
    authDomain: "react-otp-work-8cf64.firebaseapp.com",
    projectId: "react-otp-work-8cf64",
    storageBucket: "react-otp-work-8cf64.appspot.com",
    messagingSenderId: "467426391591",
    appId: "1:467426391591:web:1920de3cfaa149e8260002",
    measurementId: "G-0GRH2QK0W7"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;