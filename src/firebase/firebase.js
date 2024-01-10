import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MESSAGING_MEASUREMENT_ID,
//   databaseURL : process.env.REACT_APP_FIREBASE_DATABASE_URL
// };


const firebaseConfig = {
    apiKey: "AIzaSyAvjbGpH0VruyUxTmREAPMaCYbfv3-VGwQ",
    authDomain: "dilekreact.firebaseapp.com",
    databaseURL: "https://dilekreact-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dilekreact",
    storageBucket: "dilekreact.appspot.com",
    messagingSenderId: "527042817634",
    appId: "1:527042817634:web:8eadcc6d68566ee3832b3b",
    measurementId: "G-VF03KBBB3C"
  };

initializeApp(firebaseConfig);
export default getFirestore();