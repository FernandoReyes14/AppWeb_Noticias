import firebase from "firebase/app"
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSGO_RBVlqTJnTpXE8HmYTLcUTH4DZ5So",
    authDomain: "xidoorutaspagf.firebaseapp.com",
    projectId: "xidoorutaspagf",
    storageBucket: "xidoorutaspagf.appspot.com",
    messagingSenderId: "342281574764",
    appId: "1:342281574764:web:337f71a10fd76a1eb83b49",
    measurementId: "G-MLWB5H6VW9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);