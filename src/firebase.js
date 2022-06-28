import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAn3rqWIyMC_DNI4tUZBpyJUHS_5MmxsWk",
    authDomain: "twitter-clone-e157e.firebaseapp.com",
    databaseURL: "http://twitter-clone-e157e.firebaseaio.com",
    projectId: "twitter-clone-e157e", 
    storageBucket: "twitter-clone-e157e.appspot.com",
    messagingSenderId: "262961699977",
    appId: "1:262961699977:web:88cb386cab89de65eeba58",
    measurementId: "G-K382VHPXBD"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;