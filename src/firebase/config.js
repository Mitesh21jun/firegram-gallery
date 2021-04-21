import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcdjLAWwPBwRhjdhS3TAPyb2bibYRtsh4",
  authDomain: "firegram-gallery-00.firebaseapp.com",
  databaseURL: "https://firegram-gallery-00-default-rtdb.firebaseio.com",
  projectId: "firegram-gallery-00",
  storageBucket: "firegram-gallery-00.appspot.com",
  messagingSenderId: "762511217221",
  appId: "1:762511217221:web:3325c5c7700fceb047892c",
  measurementId: "G-9M7SHV8Y56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };