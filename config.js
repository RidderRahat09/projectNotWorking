import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here


const firebaseConfig = {
  apiKey: "AIzaSyBcpDpMoTqe2DWcbJCQzBd7rPn4oJLlHhE",
  authDomain: "e-ride-35699.firebaseapp.com",
  projectId: "e-ride-35699",
  storageBucket: "e-ride-35699.appspot.com",
  messagingSenderId: "529192424157",
  appId: "1:529192424157:web:facfa51ab268e478ae0134"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
