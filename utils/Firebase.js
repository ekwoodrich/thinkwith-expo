import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../secrets";

app.initializeApp(firebaseConfig);
const Firebase = {
  auth: app.auth(),
  db: app.firestore()
};

export default Firebase;
