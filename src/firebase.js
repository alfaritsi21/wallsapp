import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBixmU5T7QXhz-5SWrJZr7mAw9JAx9ddfQ",
  authDomain: "wallsapp-d35b3.firebaseapp.com",
  databaseURL: "https://wallsapp-d35b3.firebaseio.com",
  projectId: "wallsapp-d35b3",
  storageBucket: "wallsapp-d35b3.appspot.com",
  messagingSenderId: "121976137330",
  appId: "1:121976137330:web:a2c1abca9b16bba3fbc4eb",
  measurementId: "G-Z7P1HH2B71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
