import * as firebase from 'firebase'  // Should not be used elsewhere in the project



const firebaseConfig = {
  apiKey: "AIzaSyBqd4g56-Ya973zXdd7eb9ECvdz2p10HV0",
  authDomain: "thinkwith-b4627.firebaseapp.com",
  databaseURL: "https://thinkwith-b4627.firebaseio.com",
  projectId: "thinkwith-b4627",
  storageBucket: "",
  messagingSenderId: "892887036275",
  appId: "1:892887036275:web:81149189a993c08a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;