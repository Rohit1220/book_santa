import firebase from 'firebase'
require('@firebase/firestore'); 

const firebaseConfig = {
  apiKey: "AIzaSyCs2egZDyje2gADvnl91rhL0GB4XyaWH2g",
  authDomain: "barter-system-app-4.firebaseapp.com",
  projectId: "barter-system-app-4",
  storageBucket: "barter-system-app-4.appspot.com",
  messagingSenderId: "269927263024",
  appId: "1:269927263024:web:0894b850fe089c3d5d36f5",
  measurementId: "G-1W2JW009NY"
};

    firebase.initializeApp(firebaseConfig);
    export default firebase.firestore();  