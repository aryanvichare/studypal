import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcaGEaYyNozbEqPBCm9x53FpcKQSKRuuI",
  authDomain: "studypal-f122c.firebaseapp.com",
  projectId: "studypal-f122c",
  storageBucket: "studypal-f122c.appspot.com",
  messagingSenderId: "689101280072",
  appId: "1:689101280072:web:617b0a8b282e09b0ca597d",
  measurementId: "G-Y9WT56R2PW",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
