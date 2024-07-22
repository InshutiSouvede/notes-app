import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBjICJlZwfpvqqRvsXMjHr9GkbMqJhuuws",
  authDomain: "notes-app-react-171b4.firebaseapp.com",
  projectId: "notes-app-react-171b4",
  storageBucket: "notes-app-react-171b4.appspot.com",
  messagingSenderId: "830396614923",
  appId: "1:830396614923:web:bcdafcd01774d42b1cba0e",
  measurementId: "G-Y0QE9C8R0F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const notesCollection = collection(db,'notes')
