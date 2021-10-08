import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFRfSoSrr0IicYzmiShbsYVkjMvj2BAeo",
  authDomain: "greenblog-8be80.firebaseapp.com",
  projectId: "greenblog-8be80",
  storageBucket: "greenblog-8be80.appspot.com",
  messagingSenderId: "554774819680",
  appId: "1:554774819680:web:96a63bac9e20e1571da405"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  export default firebase;