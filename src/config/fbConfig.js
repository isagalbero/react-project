import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZHd3ALOnMBmg_Pan5VyGTI0kEDkTStLA",
  authDomain: "reactplan.firebaseapp.com",
  databaseURL: "https://reactplan.firebaseio.com",
  projectId: "reactplan",
  storageBucket: "reactplan.appspot.com",
  messagingSenderId: "691465275484"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;