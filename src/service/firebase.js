import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

    ///
    // apiKey: "AIzaSyAFBrNKXJr6Hm5gKmUhs72OJqcUsNyesUc",
    // authDomain: "busniness-card-maker.firebaseapp.com",
    // databaseURL: "https://busniness-card-maker-default-rtdb.firebaseio.com",
    // projectId: "busniness-card-maker",
   
  };
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
