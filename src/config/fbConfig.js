
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxx",
    authDomain: "net-planner-7be21.firebaseapp.com",
    databaseURL: "xxxxxxxxxxxxx",
    projectId: "net-planner-7be21",
    storageBucket: "net-planner-7be21.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxx"
};
// Initialize Firebase
firebase.initializeApp(config);
// fixed bug: @firebase/firestore: Firestore (7.15.5): The setting 'timestampsInSnapshots: true' is no longer required and should be removed removed .settings({ timestampsInSnapshots: true})
firebase.firestore();
// firebase.analytics();

export default firebase;