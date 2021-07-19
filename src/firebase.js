import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDC6mLHt57Ep8MhgU_B7a5ki6qO-PlOnko",
    authDomain: "fir-todo-46245.firebaseapp.com",
    projectId: "fir-todo-46245",
    storageBucket: "fir-todo-46245.appspot.com",
    messagingSenderId: "827957561717",
    appId: "1:827957561717:web:d5a71361f3d2f77c3eeb3c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase