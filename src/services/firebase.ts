import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBR_GppdVbZdCw3x2OuQPLA0sbr-ihAFR0",
  authDomain: "letmeask-be17d.firebaseapp.com",
  databaseURL: "https://letmeask-be17d-default-rtdb.firebaseio.com",
  projectId: "letmeask-be17d",
  storageBucket: "letmeask-be17d.appspot.com",
  messagingSenderId: "619556506810",
  appId: "1:619556506810:web:1f08c5dbce02e7d2d00683"
};

firebase.initializeApp(firebaseConfig);
 
const auth = firebase.auth();
 const database = firebase.database();

 export { firebase, auth, database }