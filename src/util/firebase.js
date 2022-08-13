//import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRIitOld8b55ZOby1HxvhUUKFUd8xw60A",
  authDomain: "personal-portfolio-28b4d.firebaseapp.com",
  databaseURL: 'https://personal-portfolio-28b4d-default-rtdb.firebaseio.com',
  projectId: "personal-portfolio-28b4d",
  storageBucket: "personal-portfolio-28b4d.appspot.com",
  messagingSenderId: "453708744723",
  appId: "1:453708744723:web:4cea474cd147d59dbe97e6",
  measurementId: "G-N2GNB1FHVQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;