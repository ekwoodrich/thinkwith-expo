import * as firebase from 'firebase'  // Should not be used elsewhere in the project
import firebaseConfig from '../secrets'


console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

export default firebase;