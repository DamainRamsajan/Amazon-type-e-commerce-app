import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5Niadt78ZkyzcRbXFkpKidM1DQBnJ96M",
    authDomain: "clone-316a1.firebaseapp.com",
    projectId: "clone-316a1",
    storageBucket: "clone-316a1.appspot.com",
    messagingSenderId: "185019185963",
    appId: "1:185019185963:web:6078bf3f0a8a961544236e",
    measurementId: "G-M2D6H5V1N4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth;

  export {db, auth};

  